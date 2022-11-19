// receiving data from RAW
fetch("https://raw.githubusercontent.com/omidfarhangnia/SineMkt-website/main/js/data/new_arriavls.json")
.then((response) => response.json())
.then((data) => {
    makeResultReady(data);
})
// adding offcanvas elements

const BURGER_MENU = document.querySelector(".burger_menu");
const EXIT_OFFCANVAS = document.querySelector(".page_offcanvas");
const PAGE_OFFCANVAS = document.querySelector(".page_offcanvas");
// adding offcanvas script

BURGER_MENU.addEventListener("click", () => {
    offcanvas_changes("open")
});
EXIT_OFFCANVAS.addEventListener("click", () => {
    offcanvas_changes("close")
});

function offcanvas_changes(change){
    if(change == "open"){
        PAGE_OFFCANVAS.classList.remove("page_offcanvas--close");
        PAGE_OFFCANVAS.classList.add("page_offcanvas--open");
        PAGE_OFFCANVAS.setAttribute("is-open", true);
    }else{
        PAGE_OFFCANVAS.classList.remove("page_offcanvas--open");
        PAGE_OFFCANVAS.classList.add("page_offcanvas--close");
        PAGE_OFFCANVAS.setAttribute("is-open", false);
    }
}

// adding goods from json file(local server)

function makeResultReady(data){
    let result = `<h2 class="new__arrivals--header">new arrivals</h2>`;
    for(member of data){
        var memberIsSale = member.isSale;
        var memberSaleSituation = member.sale_situation;
        result += `
            <div class="commodity__container${memberIsSale === false ? '' : memberSaleSituation === "green" ? " green__sale" : " brown__sale"}">
                <div class="commodity--img">
                    <img src="${member.img_path}" alt="">
                </div>
                <h4>${member.commodity_name}</h4>
                <p>${member.commodity_price}</p>
            </div> 
        `;
    }
    console.log(result);
}

// <div class="commodity__container">
// <div class="commodity--img">
//     <img src="./image/new arrivals/arm-chair.png" alt="">
// </div>
// <h4></h4>
// <p></p>
// </div> 
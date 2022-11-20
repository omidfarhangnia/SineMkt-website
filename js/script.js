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
// adding data connection elements
const NEW__ARRIVALS = document.querySelector(".new__arrivals");

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
                    <nav class="commodity__nav">
                        <span class="commodity__nav--add">add to cart</span>
                        <span class="commodity__nav--favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                        </span>
                        <span class="commodity__nav--fullsize">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                            </svg>
                        </span>
                    </nav>
                </div>
                <h4 class="commodity--header"><a href="#">${member.commodity_name}</a></h4>
                <p class="commodity--price">${member.commodity_price}</p>
            </div> 
        `;
    }
    NEW__ARRIVALS.innerHTML = result;
}

// <div class="commodity__container">
// <div class="commodity--img">
//     <img src="./image/new arrivals/arm-chair.png" alt="">
// </div>
// <h4></h4>
// <p></p>
// </div> 
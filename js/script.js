// receiving data from RAW
// new arrivals
fetch("https://raw.githubusercontent.com/omidfarhangnia/SineMkt-website/main/js/data/new_arriavls.json")
.then((response) => response.json())
.then((data) => {
    showNewArrivalResult(data);
})
// featured products
fetch("https://raw.githubusercontent.com/omidfarhangnia/SineMkt-website/main/js/data/featured_products.json")
.then(response => response.json())
.then(data => {
    showFeaturedProductsResult(data);
})
// latest blog
fetch("https://raw.githubusercontent.com/omidfarhangnia/SineMkt-website/main/js/data/latest_blog.json")
.then(response => response.json())
.then(data => {
    showLatestBlogResult(data)
})
// adding offcanvas elements
const BURGER_MENU = document.querySelector(".burger_menu");
const EXIT_OFFCANVAS = document.querySelector(".page_offcanvas");
const PAGE_OFFCANVAS = document.querySelector(".page_offcanvas");
// adding data to page as element
const NEW__ARRIVALS__CARDS__CONTAINER = document.querySelector(".new__arrivals__cards__container");
const FEATURED__PRODUCT__CARDS__CONTAINER = document.querySelector(".featured__product__cards__container");
const LATEST__BLOG__CARDS__CONTAINER = document.querySelector(".latest__blog__cards__container");
// nav bar
const PAGE__NAV = document.querySelector("#nav");
// fullscreen spans
var allFullScreenBtn;
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
function showNewArrivalResult(data){
    let result = ``;
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
                        <span class="commodity__nav--fullscreen" onclick="showFullScreen(this)">
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
    NEW__ARRIVALS__CARDS__CONTAINER.innerHTML = result;
}
function showFeaturedProductsResult(data){
    let result = ``;
    for(member of data){
        let starts_element = giveStarts(member.starts)
        result += `
        <div class="featured__product__card">
            <div class="card--image">
                <img src="${member.path}">
            </div>
            <div class="card--rank">
                <span class="rank--stars">${starts_element}</span>
                <span class="rank--reviews">(${member.review_num} review)</span>
            </div>
            <h5 class="card--header"><a href="#">${member.title}</a></h5>
            <p class="card--price">${member.price}</p>
        </div>
        `
    }
    FEATURED__PRODUCT__CARDS__CONTAINER.innerHTML = result;
}
function giveStarts(starts_num){
    let result = ``;
    for(var i = 0; i < starts_num; i++){
        // add starts fill icon
        result += `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        `
    }
    if(starts_num != 5){
        var empty_stars = 5 - starts_num;
        for(var i = 0; i < empty_stars; i++){
            result += `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
            `
        }
    }
    return result;
}
function showLatestBlogResult(data){
    let result = ``;
    for(member of data){
        result += `
        <div class="latest__blog__card"> 
            <div class="blog__image">
                <img src="${member.image_path}" alt="">
            </div>
            <h5 class="blog__header"><a href="${member.page_link}">${member.title}</a></h5>
            <p class="blog__data">
                <span class="blog__data--written">${member.written}</span> / <span class="blog__data--data">${member.data}</span>
            </p>
            <p class="blog__text__demo">${member.text_demo.slice(0, 170)}...</p>
        </div>
        `;
    }
    LATEST__BLOG__CARDS__CONTAINER.innerHTML = result;
}
// script for navbar style
window.addEventListener("scroll", () => {
    if(window.scrollY != 0){
        PAGE__NAV.classList.add("active_nav");
    }else{
        PAGE__NAV.classList.remove("active_nav");
    }
})

function showFullScreen(element){
    let elementContainer = element.parentNode;
    let imgSibling = elementContainer.previousElementSibling;
    if(imgSibling.requestFullscreen){
        imgSibling.requestFullscreen();
    }
}

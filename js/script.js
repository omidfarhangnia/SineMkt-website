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
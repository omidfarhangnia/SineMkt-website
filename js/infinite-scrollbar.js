const IMAGE__CONTAINER = document.querySelector('.image__container');
var imagePath = [
    "./image/infinite scrollbar/adidas-logo.png",
    "./image/infinite scrollbar/handm-logo.png",
    "./image/infinite scrollbar/kappa-logo.png",
    "./image/infinite scrollbar/lacoste-logo.png",
    "./image/infinite scrollbar/levis-logo.png"];
var currentImagePathNum = 0;

window.addEventListener("load", () => {
    startInfiniteScroll()
});

function startInfiniteScroll(){
    setInterval(() => {
        var new_span = document.createElement("span");
        var new_img = document.createElement("img");
        new_img.src = imagePath[currentImagePathNum];
        new_span.appendChild(new_img);
        IMAGE__CONTAINER.append(new_span);
        currentImagePathNum++;
        if(currentImagePathNum >= imagePath.length){
            currentImagePathNum = 0;
        }
    }, 3000);
    setTimeout(() => {
        setInterval(() => {
            var lastChild = IMAGE__CONTAINER.firstElementChild;
            lastChild.remove();
        }, 3000);
    }, 9000);
}
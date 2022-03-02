var image = document.querySelector(".bg-img");
var currentPos = 0;
var images = ["/img/blue.jpg", "/img/bluekey.jpg", ]
function bg_changer() {
    if (++currentPos >= images.length)
        currentPos = 0;
     image.src = images[currentPos];
}
 setInterval(bg_changer, 5000);
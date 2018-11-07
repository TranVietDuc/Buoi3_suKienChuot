var imgObj = null;
imgObj = document.getElementById('craft');



function moveLeft() {
    imgObj.style.left = parseInt(imgObj.style.left) - 10 + "px";

}

function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + "px";
}


function changeImage(){
    document.getElementById("forjsdropbtnimage").src = "https://drive.google.com/uc?export=view&id=1y66FuUOEUzsS5cMVY-m8wHdaY6lv8fgJ";
}

function backToOriginal(){
    document.getElementById("forjsdropbtnimage").src = "https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/menu-512.png";
}


var clickedornot = false
function whenclicked(){
    if (clickedornot == false){
        clickedornot = true;
    } else {
        clickedornot = false;
    }
    if (clickedornot == false){
        document.getElementById("dropdown-content").style.visibility = "hidden"
        backToOriginal();
    } else {
        document.getElementById("dropdown-content").style.visibility = "visible"
        changeImage();
    }
}

window.addEventListener('load', function() {
  document.getElementById('friendsbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('followingbtn').style.backgroundColor = "rgb(237, 244, 255)";
})



function functionfortrading(elem){
    if (elem.id == "friendsbtn"){
        document.getElementById('friendsbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('followingbtn').style.backgroundColor = "rgb(237, 244, 255)";
    } else {
    document.getElementById('followingbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('friendsbtn').style.backgroundColor = "rgb(237, 244, 255)";
    }
}



window.addEventListener('load', function() {
  document.getElementById('bitscoinbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('snackcollectionbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById("titleleaderboards").innerHTML = "LEADERBOARD - BITSCOIN";
})



function functionforleaderboards(elem){
    if (elem.id == "bitscoinbtn"){
        document.getElementById('bitscoinbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('snackcollectionbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById("titleleaderboards").innerHTML = "LEADERBOARD - BITSCOIN";
    } else {
    document.getElementById('snackcollectionbtn').style.backgroundColor = "rgb(82, 112, 168)";
    document.getElementById('bitscoinbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById("titleleaderboards").innerHTML = "LEADERBOARD - SNACK COLLECTION";
    }
}



window.addEventListener('load', function() {
  document.getElementById('allbtn').style.backgroundColor = "rgb(112, 167, 255)";
    document.getElementById('sweetsbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('savourybtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('petsbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('materialbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('limitededitionbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById("titleinventory").innerHTML = "PLAYER12'S INVENTORY: 403";
      
      document.getElementById('inventory_image_console').style.boxShadow = "30px 15px 30px #242323";
      document.getElementById('inventory_image_console').style.backgroundColor = "transparent"

})

//toggle between the different inventory items
const itemsidarray = ["inventory_image_console", 'inventory_image_hank', 'inventory_image_muffin', 'inventory_image_leygreen', 'inventory_image_leypurple', 'inventory_image_pizza', 'inventory_image_burger', 'inventory_image_chickendrum', 'inventory_image_coke', 'inventory_image_pockey', 'inventory_image_mathchemhist', 'inventory_image_bitscoin', 'inventory_image_testtube', 'inventory_image_calender', 'inventory_image_bulb']

//havent changed here
function functionforinventoryitem(elem){
        
        
        if (document.getElementById != elem.id){
            let i = 0;
            for (i=0; i<itemsidarray.length; i++){
                if (i!=itemsidarray.indexOf(elem.id)){
                    document.getElementById(itemsidarray[i]).style.backgroundColor = "transparent";
                    document.getElementById(itemsidarray[i]).style.boxShadow = null;
                    
                } else {
                    
                    document.getElementById(itemsidarray[i]).style.boxShadow = "30px 15px 30px #242323";
      document.getElementById(itemsidarray[i]).style.backgroundColor = "transparent"



                    document.getElementById("itemnameinventory").innerHTML = document.getElementById(itemsidarray[i]).getElementsByTagName('img')[0].getAttribute('alt'); ;
                    document.getElementById("subinventorycontainer4img").src = document.getElementById(itemsidarray[i]).getElementsByTagName('img')[0].getAttribute('src');
                }
                      
            }
        } 
}



//toggle between the different inventory buttons
const inventoryidarray = ["allbtn", 'sweetsbtn', 'savourybtn', 'petsbtn', 'materialbtn', 'limitededitionbtn']

function functionforinventory(elem){
        document.getElementById(elem.id).style.backgroundColor = "rgb(82, 112, 168)";
        if (document.getElementById != elem.id){
            let i = 0;
            for (i=0; i<inventoryidarray.length; i++){
                if (i!=inventoryidarray.indexOf(elem.id)){
                    document.getElementById(inventoryidarray[i]).style.backgroundColor = "rgb(237, 244, 255)";
                    

                } else {
                    // to ensure the inventory side buttons do not overlap with blue colours, hence for the additional d loop
                    document.getElementById(inventoryidarray[i]).style.backgroundColor = "rgb(112, 167, 255)";
                    for (d=0; d<inventoryidarray.length; d++){
                        if (d!=i){
                           document.getElementById(inventoryidarray[d]).style.backgroundColor = "rgb(237, 244, 255)"; 
                        }
                    }




                    var table = document.getElementById("inventoryobjects");
                    if (elem.id != "allbtn"){



                        

//below function to filter items according to the id they are assigned to
       for (var a = 0; a<table.rows.length; a++) {
        for (var b = 0; b<table.rows[0].cells.length; b++) {
    
     if (table.rows[a].cells[b].id == elem.id){
         table.rows[a].cells[b].style.visibility = "visible";
     } else {
         table.rows[a].cells[b].style.visibility = "hidden";
     }
     
   }  
}
               

            } else{
                //ensure no more filtering occurs where "all" button is pressed again
                for (var a = 0; a<table.rows.length; a++) {
                for (var b = 0; b<table.rows[0].cells.length; b++) {
     
                table.rows[a].cells[b].style.visibility = "visible";
            
     
        }  
    }
            }
            }
                      
            }
        } 
}



// next steps: 
//- hide the right side text to: "no selection", when the item is hidden after filtering
//- reorder all the cells in proper table format, instead of leaving blank space in the table
// - make an array of ids for each item so that it will appear in more than 1 section e.g. the situation now is that hank only appears for limited edition, but it is a pet also

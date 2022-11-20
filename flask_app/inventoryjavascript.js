//!!!! olddoc will remove that item from the table list once displayed on the table !!!!
var olddoc;
var cloningdocument = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            olddoc = document.body.cloneNode(true);
        }
    };
})();

// what happens once the window loads
window.addEventListener('load', function() {
    itemsidarray = [];
    for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }

  document.getElementById('allbtn').style.backgroundColor = "rgb(112, 167, 255)";
    document.getElementById('sweetsbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('savourybtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('petsbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('materialbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById('limitededitionbtn').style.backgroundColor = "rgb(237, 244, 255)";
    document.getElementById("titleinventory").innerHTML = "PLAYER12'S INVENTORY: 403";
      
      document.getElementById('inventory_image_console').style.boxShadow = "30px 15px 30px #242323";
      document.getElementById('inventory_image_console').style.backgroundColor = "transparent";
      elementpreviousselected = "inventory_image_console";

})

//cloning the initial document
cloningdocument();



//toggle between the different inventory items
var itemsidarray = [];

//all the items in the table initially
var table = document.getElementById("inventoryobjects");
const bigbankofitemstemp = [];
         for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            bigbankofitemstemp.push(table.rows[b].cells[c]);
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }
var tableclone = table.cloneNode(true);
var arrayofblanktrforallbtn = [];
var arrayofblanktrforothers = [];
//var oneselected = true;
var elementpreviousselected;
var currentcategoryclicked;



//function runs when click on a cell
function functionforinventoryitem(elem){
    //oneselected = true;
    // refreshing itemsidarray
    itemsidarray = [];
    for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }
        

        //setting the style of the cells when clicked/not clicked
        if (document.getElementById != elem.id){
            for (var i=0; i<itemsidarray.length; i++){
                if (i!=itemsidarray.indexOf(elem.id)){
                    document.getElementById(itemsidarray[i]).style.backgroundColor = "transparent";
                    document.getElementById(itemsidarray[i]).style.boxShadow = null;
                    
                } else {
                    
                    //if (oneselected){
                    document.getElementById(itemsidarray[i]).style.boxShadow = "30px 15px 30px #242323";
                    document.getElementById(itemsidarray[i]).style.backgroundColor = "transparent"
                    if (currentcategoryclicked == "allbtn"){
                        elementpreviousselected = itemsidarray[i];
                    }
                   // }



// setting the style of the right side table view when cells are ckicked/not clicked
                    document.getElementById("itemnameinventory").innerHTML = document.getElementById(itemsidarray[i]).getElementsByTagName('img')[0].getAttribute('alt'); ;
                    document.getElementById("subinventorycontainer4img").src = document.getElementById(itemsidarray[i]).getElementsByTagName('img')[0].getAttribute('src');
                }
                      
            }
        } 
}


let storedinventoryitemvalue = 0
//toggle between the different inventory category buttons
const inventoryidarray = ["allbtn", 'sweetsbtn', 'savourybtn', 'petsbtn', 'materialbtn', 'limitededitionbtn']


//function when clicked on the side category buttons
function functionforinventory(elem){
    currentcategoryclicked = elem.id;
    itemsidarray = [];
    for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }


//for side category buttons
        document.getElementById(elem.id).style.backgroundColor = "rgb(82, 112, 168)";
        if (document.getElementById != elem.id){
            let i = 0;
            for (i=0; i<inventoryidarray.length; i++){
                storedinventoryitemvalue = i
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




                    if (elem.id != "allbtn"){        
//below function to filter items according to the (multiple) id they are assigned to
        // var temp = [];

        // for (var z=0; z<bigbankofitems.length; z++){
    
        //     if (bigbankofitems[z].className.includes(elem.id)){

        //         temp.push(bigbankofitems);

        //     }
        // }
        var clone2 = olddoc.cloneNode(true);
       var temp = Array.from(clone2.getElementsByClassName(elem.id)).slice();
    


      


//create a new array based on filtered items
    //    var temp2 = temp;
    //     for (var a=0; a<temp.length; a++) {
    //         temp[a].style.visibility = "visible";
    //     }

//to be used later when clearing the table in order to order the items properly
// var alltheitemsintable = [];

// //create an array for non filtered items      
//       var notinsidetemp = [];
//          for (var b = 0; b<originaltable.rows.length; b++) {
//         for (var c = 0; c<originaltable.rows[0].cells.length; c++) {
//             alltheitemsintable.push(originaltable.rows[b].cells[c]);
//             if (temp.includes(originaltable.rows[b].cells[c])){
//             } else {
//                 notinsidetemp.push(originaltable.rows[b].cells[c]);
//             }
//         }
//          }

//do not display non-filtered items
        // for (var e=0; e<notinsidetemp.length; e++) {
        //     notinsidetemp[e].style.visibility = "hidden";

        // }

//responsive web design: make the elements reorder themselves in the table once filtered
        while(table.rows.length > 0) {
            table.deleteRow(0);
        }


         for (var e=0; e<(Math.ceil(temp.length/5)); e++) {
             var newrow = table.insertRow(e);
             for (var f=0; f<temp.length; f++){
                 if (newrow.cells.length < 5){
                     newrow.appendChild(temp[f]);
                 } else {
                     newrow = table.insertRow(-1);
                     newrow.appendChild(temp[f]);
                 }
             }
         }

//delete all the empty rows with <tr></tr>: i.e. workaround
        const store2 = table.rows.length
          for (var d=0; d<store2; d++){
             if (table.rows[d].childElementCount == 0){
                 arrayofblanktrforothers.push(table.rows[d]);
             }
            table.rows[d].className = "inventoryobjectsbetweenrows";
          }
          for (var u=0; u<arrayofblanktrforothers.length; u++){
              table.deleteRow(arrayofblanktrforothers[u].rowIndex);
          }
          arrayofblanktrforothers = [];
//
      
         
itemsidarray = [];
    for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }


// everytime a new category is clicked, the first element will be selected
         document.getElementById("itemnameinventory").innerHTML = table.rows[0].cells[0].getElementsByTagName('img')[0].getAttribute('alt'); ;
                    document.getElementById("subinventorycontainer4img").src = table.rows[0].cells[0].getElementsByTagName('img')[0].getAttribute('src');
                    
        table.rows[0].cells[0].getElementsByTagName("button")[0].style.boxShadow = "30px 15px 30px #242323";
      table.rows[0].cells[0].getElementsByTagName("button")[0].style.backgroundColor = "transparent";
     // oneselected = false;

      

        
       


            
            } else {
                //ensure no more filtering occurs where "all" button is pressed again - revert back to original table
        
 while(table.rows.length > 0) {
            table.deleteRow(0);
        }


         for (var w=0; w<(Math.ceil(bigbankofitemstemp.length/5)); w++) {
             var newrow = table.insertRow(w);
             for (var y=0; y<bigbankofitemstemp.length; y++){
                 if (newrow.cells.length < 5){
                     newrow.appendChild(bigbankofitemstemp[y]);
                 } else {
                     newrow = table.insertRow(-1);
                     newrow.appendChild(bigbankofitemstemp[y]);
                 }
             }

         }

// delete all the empty rows with <tr></tr>: i.e. workaround
const store = table.rows.length;
    for (var d=0; d<store; d++){  
             if (table.rows[d].childElementCount == 0){
                 arrayofblanktrforallbtn.push(table.rows[d]);
             }
             table.rows[d].className = "inventoryobjectsbetweenrows";
          }
    for (var u=0; u<arrayofblanktrforallbtn.length; u++){
        table.deleteRow(arrayofblanktrforallbtn[u].rowIndex);
    }
    arrayofblanktrforallbtn = [];
     

//
         itemsidarray = [];
    for (var b = 0; b<table.rows.length; b++) {
        for (var c = 0; c<table.rows[b].cells.length; c++) {
            itemsidarray.push(table.rows[b].cells[c].getElementsByTagName("button")[0].id);
        }
         }

         // everytime a new category is clicked, the first element will be selected


         document.getElementById("itemnameinventory").innerHTML = table.rows[0].cells[0].getElementsByTagName('img')[0].getAttribute('alt');
                    document.getElementById("subinventorycontainer4img").src = table.rows[0].cells[0].getElementsByTagName('img')[0].getAttribute('src');
             table.rows[0].cells[0].getElementsByTagName("button")[0].style.boxShadow = "30px 15px 30px #242323";
      table.rows[0].cells[0].getElementsByTagName("button")[0].style.backgroundColor = "transparent";     
      if (elementpreviousselected != "inventory_image_console"){
          document.getElementById(elementpreviousselected).style.backgroundColor = "transparent";
        document.getElementById(elementpreviousselected).style.boxShadow = null; 
      } 
              
        


    //             for (var a = 0; a<table.rows.length; a++) {
    //             for (var b = 0; b<table.rows[a].cells.length; b++) {
    //                 table.rows[a].cells[b].style.backgroundColor = "transparent";
    //                 table.rows[a].cells[b].style.boxShadow = null;
     
    // //             originaltable.rows[a].cells[b].style.visibility = "visible";
    // //             document.getElementById("itemnameinventory").style.visibility = "visible";
    // //                 document.getElementById("subinventorycontainer4img").style.visibility = "visible";
    // //                 document.getElementById("itemname").style.visibility = "visible";
    // //                 document.getElementById("subinventorycontainer4bottom1").style.visibility = "visible";
     
    //     }  
    // }
    

            }

        
                      
            }
        } 
}
}




var data =[{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"}];




var newt = document.getElementsByClassName("data-show")[0];
var items = data;
function createTr(){
    return document.createElement("tr");
    //console.log(newTr);
}

// for(var i = 0; i < items.length; i++) {
//     var newTr = document.createElement("tr");
//     //console.log(newTr);
// // for (var j = 0; j <= 4; j++) {
// //      var newTd = function(){
// //         document.createElement('td');
// //      //console.log(newTd);
// //      newTr.appendChild(newTd);
// //      console.log(newTd);
// //     };
//     }
function createTd(){
     return document.createElement("td");
}

var populateData = function(){
    for (var j = 0; j < items.length; j++) {
      var tr = createTr();  
      for (var i = 0; i <=4; i++) {
        var td = createTd(i);
        tr.appendChild(td);
      }
      console.log(tr);
    }  
}

//console.log(addTd());

 //    newTr.appendChild(newTd);
 //    console.log(newTr);
 //    // newTr.appendChild(newTd)
 //    // newTr.appendChild(newTd)
 //    // newTr.appendChild(newTd)
 //    // newTr.appendChild(newTd)



   // document.getElementsByTagName("tr").innerHTML= '<span class="glyphicon glyphicon-play color-gly"></span>   <span class="glyphicon glyphicon-pencil color-gly"></span>   <span class="glyphicon glyphicon-trash color-gly"></span>';
 //    newTd2.innerHTML = items[i].name;
 //    newTd3.innerHTML = items[i].description;
 //    newTd4.innerHTML = items[i].ownername;
 //    newTd5.innerHTML = items[i].readpermissions;

	// console.log(newTr)
 //   	newt.appendChild(newTr);

function addData(){

    var row = populateData();
    row.innerHTML = '<span class="glyphicon glyphicon-play color-gly"></span>   <span class="glyphicon glyphicon-pencil color-gly"></span>   <span class="glyphicon glyphicon-trash color-gly"></span>';
}


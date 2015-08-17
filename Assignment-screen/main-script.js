var data =[{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"},{"name":"Edited the search Criteria", "description":"TC and Global Admin","ownername":"LogRhythm Admin","readpermissions":"Private"}];




var newt = document.getElementsByClassName("data-show")[0];
var items = data;

for(var i = 0; i < items.length; i++) {
    var newTr = document.createElement("tr");

    var newTd1 = document.createElement('td')
    var newTd2 = document.createElement('td')
    var newTd3 = document.createElement('td')
    var newTd4 = document.createElement('td')
    var newTd5 = document.createElement('td')

    newTr.appendChild(newTd1)
    newTr.appendChild(newTd2)
    newTr.appendChild(newTd3)
    newTr.appendChild(newTd4)
    newTr.appendChild(newTd5)



    newTd1.innerHTML = '<span class="glyphicon glyphicon-play color-gly"></span>   <span class="glyphicon glyphicon-pencil color-gly"></span>   <span class="glyphicon glyphicon-trash color-gly"></span>';
    newTd2.innerHTML = items[i].name;
    newTd3.innerHTML = items[i].description;
    newTd4.innerHTML = items[i].ownername;
    newTd5.innerHTML = items[i].readpermissions;

	console.log(newTr)
   	newt.appendChild(newTr);


   }

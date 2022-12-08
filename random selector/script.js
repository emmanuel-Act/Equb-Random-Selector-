function onFormSubmit(){
   if(document.getElementById("name").value == "" || document.getElementById("amount").value == ""){
    alert("Both of the input fields must be filled!");
   }
   else{
        var formData = readFormData();
        insertNewRecord(formData);
        resetForm();
   }
}


function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["amount"] = document.getElementById("amount").value;

    return formData;
}


function insertNewRecord(data){
    var table = document.getElementById("display").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.amount;


}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("amount").value = "";
}


var names = [];

function random_submit(){

    names.push(document.getElementById("name").value);
  
}

function rand(){
    if(names.length == 0){
        alert("There's no one who signed up for the Equb.");
    }
    else{
        let random = Math.floor(Math.random()*(names.length));
        document.getElementById("random-name").innerHTML=names[(random)];
    }
}


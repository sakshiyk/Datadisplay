var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var Name=document.getElementById("Name").value;
    var Age=document.getElementById("Age").value;
    var Grade=document.getElementById("Grade").value;

    if(!Name || !Age || !Grade){
        alert("Please fill all the above boxes");
        return;
    }
    var display =document.getElementById("display");

    var newRow = display.insertROW(row);

    var Cell1 = newRow.insertCell(0);
    var Cell2 = newRow.insertCell(1);
    var Cell3 = newRow.insertCell(2);

    cell1.innerHTML = Name;
    cell2.innerHTML = Age;
    Cell3.innerHTML = Grade;

    row++;


}
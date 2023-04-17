var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Firstname"] = document.getElementById("Firstname").value;
    formData["Middlename"] = document.getElementById("Middlename").value;
    formData["Surname"] = document.getElementById("Surname").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeDetails").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Firstname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Middlename;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Surname;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Firstname").value = "";
    document.getElementById("Middlename").value = "";
    document.getElementById("Surname").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Middlename").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Surname").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Firstname;
    selectedRow.cells[1].innerHTML = formData.Middlename;
    selectedRow.cells[2].innerHTML = formData.Surname;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

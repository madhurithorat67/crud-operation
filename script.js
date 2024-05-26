var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    }
    else {
        updateRecord(formData);
    }
    resetForm();
}
//retrive the data
function readFormData() {
    var formData = {};
    formData["produtCode"] = document.getElementById("productCode").value;
    formData["produt"] = document.getElementById("product").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["Qty"] = document.getElementById("Qty").value;
    return formData;

}

//insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.produtCode
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.produt
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.perPrice
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Qty
    cell4= newRow.insertCell(4);
    cell4.innerHTML = "<button onclick='onEdit(this)'>Edit</button> <button onclick='onDelete(this)'>Delete</button>"
}

//edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById('productCode').value = selectedRow.cells[0].innerHTML;
    document.getElementById('product').value = selectedRow.cells[1].innerHTML;
    document.getElementById('perPrice').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Qty').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.produtCode;
    selectedRow.cells[1].innerHTML = formData.produt;
    selectedRow.cells[2].innerHTML = formData.perPrice;
    selectedRow.cells[3].innerHTML = formData.Qty;

}

//delet the data (if the conformation is yes then delete the record)
function onDelete(td) {
    if (confirm('do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
        resetForm();
    }

}

//reset the data
function resetForm() {
    document.getElementById('productCode').value = '';
    document.getElementById('product').value = '';
    document.getElementById('perPrice').value = '';
    document.getElementById('Qty').value = '';
    selectedRow = null;
}
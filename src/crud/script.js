'use strict'

const addBtn = document.getElementById('buttonAdd');
const readBtn = document.getElementById('buttonRead');
const updateBtn = document.getElementById('buttonUpdate');
const deleteBtm = document.getElementById('buttonDelete');
const  id = document.getElementById('id');
const  firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
addBtn.addEventListener('click', main);
readBtn.addEventListener('click', readRow);
updateBtn.addEventListener('click', updateRow);
deleteBtm.addEventListener('click',deleteRow);
let idArray = [];
let state = [];
let information = JSON.parse(localStorage.getItem('person_info'));
const tableBlock = document.querySelector('.table-block');

let Person = function (id, firstName,lastName,age) {
 this.id = id;
 this.firstName = firstName;
 this.lastName = lastName;
 this.age = age;
}


function main() {
    let validation = checkVal(id.value, firstName.value, lastName.value, age.value);
    if (validation[0] == true) {
        idArray.push(id.value);
        createRow();
    } else {
        errorBlock(validation[1]);
    }
}

function checkVal(id, firstName, lastName, age) {

    let flag = false;
    let description;

    if (id == 0 || firstName == 0 || lastName == 0 || age == 0) {
        description = 'emptyInput';
        return [flag, description];
    }
    if (isNaN(id) || isNaN(age)) {
        description = 'isNaN';
        return [flag, description];
    }
    if (idArray.indexOf(id) !== -1) {
        description = 'repeatID';
        return [flag, description];
    }
        flag = true;
        description = 'none';
        return [flag, description];
}

function createRow() {
let person = new Person(id.value,firstName.value,lastName.value,age.value);
 person.id = id.value;
 person.firstName = firstName.value;
 person.lastName = lastName.value;
 person.age = age.value;

    state.push(person);
    localStorage.setItem('person_info', JSON.stringify(state));



    let tableContainer = document.createElement('div');
    tableContainer.id = id.value;
    tableContainer.className = 'table-container';
    tableBlock.appendChild(tableContainer);

    let idCol = document.createElement('div');
    idCol.className = 'idCol tableCol';
    tableContainer.appendChild(idCol);
    idCol.innerText = id.value;

    let firstNameCol = document.createElement('div');
    firstNameCol.className = 'firstNameCol tableCol'  ;
    tableContainer.appendChild(firstNameCol);
    firstNameCol.innerText = firstName.value;

    let lastNameCol = document.createElement('div');
    lastNameCol.className = 'lastNameCol tableCol';
    tableContainer.appendChild(lastNameCol);
    lastNameCol.innerText = lastName.value;

    let ageCol = document.createElement('div');
    tableContainer.appendChild(ageCol);
    ageCol.className = 'ageCol tableCol'
    ageCol.innerText = age.value;

    clearInput();
}

function clearInput() {
id.value = '';
firstName.value = '';
lastName.value = '';
age.value = '';
}

function deleteRow() {
    for (let i = 0; i < state.length; i++) {
        if (id.value == state[i].id) {
            state.splice(i, 1);
            let deleteId = document.getElementById(id.value);
            deleteId.remove();
        }
    }
    delete idArray[idArray.indexOf(id.value)];
    localStorage.setItem('person_info', JSON.stringify(state));
}

function updateRow() {
    if (idArray.indexOf(id) !== -1) {
        alert('Такого ID не существует');
    } else {
        for (let i = 0; i < state.length; i++) {
            if (id.value == state[i].id) {
                state[i].firstname = firstName.value;
                state[i].lastname = lastName.value;
                state[i].age = age.value;
                let updateDiv = document.getElementById(id.value);
                updateDiv.innerHTML = `<div class="tableCol"> ${state[i].id} </div> <div class="tableCol"> ${state[i].firstname} </div> <div class="tableCol"> ${state[i].lastname} </div> <div class="tableCol"> ${state[i].age} </div>`;
                localStorage.setItem('person_info', JSON.stringify(state));
            }
        }
    }
}

function errorBlock(description) {
if (description == 'emptyInput') {
    alert('Заполните все значения')
}
if (description == 'isNaN'){
    alert('ID И Age должны быть числом');
}
if (description == 'repeatID'){
    alert('Такой ID уже существует');
}
}

function readRow() {
    for (let i = 0; i < information.length; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'table-container';
        newRow.innerHTML += `<div class="tableCol"> ${information[i].id} </div> <div class="tableCol"> ${information[i].firstName} </div> <div class="tableCol"> ${information[i].lastName} </div> <div class="tableCol"> ${information[i].age} </div>`;
        tableBlock.appendChild(newRow);
    }
}
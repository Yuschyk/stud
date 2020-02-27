'use strict'

const id = document.getElementById('id');
const firstName = document.getElementById('first__name');
const lastName = document.getElementById('last__name');
const age = document.getElementById('age');
const  buttonAdd = document.querySelector('.buttonAdd');
const buttonDel = document.getElementById('buttonDelete');

let idArray = [];

buttonAdd.addEventListener('click', main);

function main() {
    let validation = checkVal(id.value, firstName.value, lastName.value, age.value);
}
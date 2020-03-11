const id = document.getElementById('input__id');
const firstName = document.getElementById('input__firstName');
const lastName = document.getElementById('input__lastName');
const age = document.getElementById('input__age');
const email = document.getElementById('input__email');
const phone = document.getElementById('input__phone');
const lStore = document.getElementById('radio__localStore');
const indexedDB = document.getElementById('radio__indexedDB');
const buttonCreate = document.getElementById('create');
const buttonUpdate = document.getElementById('update');
const buttonDelete = document.getElementById('delete');
const labelLocalStore = document.getElementById('rBtn__ls');
const labelIndexedDB = document.getElementById('rBtn__idb')

document.addEventListener('DOMContentLoaded', checkDataBase);
labelLocalStore.addEventListener('change', checkDataBase);
labelIndexedDB.addEventListener('change', checkDataBase);


function checkDataBase() {
    if(lStore.checked){
        console.log(1);
    }
    if (indexedDB.checked){
        console.log(2);
    }
}

const request = window.indexedDB.open('MyTest', 1);
let db;
request.onsuccess = function() {
    db = request.result;
};
request.onupgradeneeded = function() {
    if (!db.objectStoreNames.contains('people')) {
        db = request.result;
        db.createObjectStore('people', { keyPath: 'id' });
    }
};
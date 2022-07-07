const button = document.getElementById('button-submit');
let inputNameUser = document.getElementById('input-name-user');
const nameUser = document.getElementById('name-user');

function getUserName (event) {
event.preventDefault();
    console.log(inputNameUser.value);
    nameUser.innerHTML = inputNameUser.value
}

button.addEventListener('click',getUserName);















const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');
const inputPassword = document.getElementById('input-password');
const formulario = document.querySelector('.formulario');
const buttonSubmit = document.getElementById('button-submit');
const arrayInformacaoName = [];
const arrayInformacaoEmail = [];

function quardarValores(event) {
  event.preventDefault();
  arrayInformacaoName.push(inputName.value);
  arrayInformacaoEmail.push(inputEmail.value);
  alert(`as informações recebidas foram:
  nome: ${ arrayInformacaoName }
  email: ${ arrayInformacaoEmail }
   voçê confirma isso?`);
  inputName.value = '';
  inputEmail.value = '';
  inputPassword.value = '';
}

buttonSubmit.addEventListener('click', quardarValores)
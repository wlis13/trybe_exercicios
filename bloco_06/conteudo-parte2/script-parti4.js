const text = document.querySelector('#input-text');
const checkbox = document.querySelector('#input-checkbox');
const link = document.querySelector('#href');
const textArea = document.getElementById('text-area');

link.addEventListener('click',function(string){
    string.preventDefault();
textArea.innerHTML = 'seu acesso está negado!'
})

checkbox.addEventListener('click', function(stop){
stop.preventDefault();
let corpo = document.getElementsByTagName('body')[0];
corpo.style.backgroundColor = 'lightblue';
})

text.addEventListener('keypress',function(event){
    event.preventDefault();
text.value = 'acesso negado!'.toUpperCase();

})
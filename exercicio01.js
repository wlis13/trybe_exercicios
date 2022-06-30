
function exercicio01 (text){
document.querySelector('#elementoOndeVoceEsta').innerText = text
};exercicio01(' elemento onde voçê está??: acessado! ')

function exercicio02 (color,size,font){
document.querySelector('#elementoOndeVoceEsta').parentNode.style.color = color
document.querySelector('#elementoOndeVoceEsta').parentNode.style.fontSize = size
document.querySelector('#elementoOndeVoceEsta').parentNode.style.fontFamily = font
};exercicio02('purple','20pt','sans-serif')

function exercicio03 (text){
document.querySelector('#elementoOndeVoceEsta').nextElementSibling.innerText = text
};exercicio03('esse é o irmão do filho do filho di filho kkkkkk')



document.querySelector('#pai').firstElementChild.innerText = 'primeiro elemento filho'

document.querySelector('#elementoOndeVoceEsta').previousElementSibling.style.color = 'gray'

















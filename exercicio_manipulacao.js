function firstparagraph(param1){
document.getElementsByTagName('p')[1].innerText = param1;

};firstparagraph('acredito que vou ter o DOM');


function alterarbackground (green){
document.getElementsByClassName('main-content')[0].style.backgroundColor = green;
}alterarbackground('rgb(76,164,109)')



function backgroundCenter (color){
    document.getElementsByClassName('center-content')[0].style.backgroundColor = color;

}; backgroundCenter('white')


function corrigirTexto (corrigir ){
    document.getElementsByTagName('h1')[0].innerText = corrigir;

};corrigirTexto('Exercício 5.1 - JavaScript - manipulação do DOM')




















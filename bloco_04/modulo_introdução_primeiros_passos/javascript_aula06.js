 function loop(){
 let candidata = 'aprovada';
switch (candidata){
    case 'reprovada':
      document.getElementById('result').innerHTML = 'infelizmente não foi desta vez, tente novamente!'
        break;
    case 'lista':
       document.getElementById('result').innerHTML = 'ainda não sei o que é lista!'
        break;
    case 'aprovada':
        document.getElementById('result').innerHTML = 'congratulation!!! you passed!'
        break;
    default:
        document.getElementById('result').innerHTML = 'ainda não temos o resultado!'
};
 };
 
function soma(){
    let numeroUm = 15;
    let numeroDois = 15;
    let resu = numeroUm + numeroDois;
    document.getElementById('resultado').innerHTML = resu;
};
function somar(){
let primeiroNumero = parseFloat(prompt('digite o primeiro número:'))
let segundoNumero = parseFloat(prompt('digite o segundo número:'))
let resultadoSoma = primeiroNumero + segundoNumero;
document.getElementById('saldo').innerHTML = 'O resultado da soma entre ' + primeiroNumero + ' e ' + segundoNumero + ' é de: ' + resultadoSoma;


}somar()


switch(document.getElementById('saldo').innerHTML){
case 'O resultado da soma entre ' + 45 + ' e ' + 45 + ' é de: ' + 90:
    document.getElementById('knight').innerHTML = 'isso mesmo está indo bem!';
    break;
case'O resultado da soma entre ' + 20 + ' e ' + 45 + ' é de: ' + 65:
    document.getElementById('knight').innerHTML = 'não é esse o resultado esperado!';
    break;
case'O resultado da soma entre ' + 15+ ' e ' + 15 + ' é de: ' + 30:
    document.getElementById('knight').innerHTML = 'continue treinando!';
    break;
default:
    document.getElementById('knight').innerHTML = 'estamos um pouco longe do objetivo mas vamos chegar lá!'
};











const numberOne = Number(parseInt(prompt('digite aqui o valor de custo do produto:')));

const numberTwo = Number(parseInt(prompt('digite aqui o valor de venda:')));

let imposto = numberOne / 5;

let lucro = (numberTwo - numberOne) * 1000;


if(numberOne < 0 || numberTwo < 0 ){

    document.getElementById('resultado').innerHTML = 'Os números estão incorretos!'


}else if(  lucro >= 1.000 && lucro < 1.000000){document.getElementById('resultado').innerHTML = 'Com os valores inseridos, o lucro será de: R$' + lucro.toFixed(2) + ' Mil Reais';

document.getElementById('result').innerHTML = 'com a venda de 1000 produtos, será pago em impostos o valor de: R$' + imposto.toFixed(3) + ' Reais';


}else{document.getElementById('resultado').innerHTML = 'Com os valores inseridos, o lucro será de: R$' + lucro.toFixed(2) + ' Reais';

document.getElementById('result').innerHTML = 'com a venda de 1000 produtos, será pago em impostos o valor de: R$' + imposto.toFixed(3) + 'Reais'}
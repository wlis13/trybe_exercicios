const numberOne = Number(parseFloat(prompt('digite aqui o valor de custo do produto:')));

const numberTwo = Number(parseFloat(prompt('digite aqui o valor de venda:')));

let imposto = numberOne / 5 * 1.000;

let custo = numberOne + imposto * 1.000;

let lucro = (numberTwo - numberOne - imposto) * 1.000;


if(numberOne < 0 || numberTwo < 0 ){

    document.getElementById('resultado').innerHTML = 'Os números estão incorretos!'


}else if(  lucro >= 1.000 && imposto < 1.000 ){document.getElementById('resultado').innerHTML = 'Com os valores inseridos, o lucro com a venda de 1000 produtos será de: R$' + lucro.toFixed(3) + ' Mil Reais';

document.getElementById('resultcust').innerHTML = 'O valor do custo com os impostos é de:R$' + custo.toFixed(3)  

document.getElementById('result').innerHTML = 'com a venda de 1000 produtos, será pago em impostos o valor de: R$' + imposto.toFixed(3) + ' Reais';


}else if(imposto >= 1.000 && lucro < 1.000){document.getElementById('resultado').innerHTML = 'Com os valores inseridos, o lucro com a venda de 1000 produtos será de: R$' + lucro.toFixed(3) + ' Reais';

document.getElementById('resultcust').innerHTML = 'O valor do custo com os impostos é de:R$ ' + custo.toFixed(3)

document.getElementById('result').innerHTML = 'com a venda de 1000 produtos, será pago em impostos o valor de: R$' + imposto.toFixed(3) + 'Mil Reais';


}else{document.getElementById('resultado').innerHTML = 'Com os valores inseridos, o lucro com a venda de 1000 produtos será de: R$' + lucro.toFixed(3) + ' Reais';

document.getElementById('resultcust').innerHTML = 'O valor do custo com os impostos é de:R$ ' + custo.toFixed(3)

document.getElementById('result').innerHTML = 'com a venda de 1000 produtos, será pago em impostos o valor de: R$' + imposto.toFixed(3) + ' Reais'
};
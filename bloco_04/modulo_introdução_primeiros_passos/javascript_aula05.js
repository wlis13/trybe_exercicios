const comida = 'pão na chapa';
const bebida = 'cafezinho';
if (comida === 'pão na chapa' && bebida === 'cafezinho'){
    console.log('Obrigado, está perfeito!')
}else{console.log('acredito que houve um engano com meu pedido')}
// o operador lógico deve ter as duas condições verdadeiras!
const conditionOne = false;
const conditionTwo = 50;
console.log(conditionOne && conditionTwo);
// se as duas forem verdadeiras o resultado da direita será imprimido senão será imprimido false.
const cenoura = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenoura && leite && arroz && feijao;
console.log(listaDeCompras);

console.log(true && true)// true
console.log(true && false)// false
console.log(false && true)// false
console.log(false && false)// false

let currentHour = 19;
let messeng = '';
if (currentHour >= 22){
    messeng = 'Não deveríamos comer nada é hora de dormir'
}else if(currentHour >= 18 && currentHour < 22){
    messeng = 'rango da noite, vamos jantar :D'
}else if (currentHour >= 14 && currentHour < 18){
    messeng = 'vamos fazer um bolo para o café da tarde?'
}else if(currentHour >= 11 && currentHour <= 14){
    messeng = 'Hummmm, cheiro de café recém passado'
};
console.log(messeng);
console.log(currentHour +  ' Hrs')

// operador OR
const bebidaPrincipal = 'cafezinho';
const bebidaAlternativa = 'suco de laranja';
if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja')
{
    console.log('Obrigado por me atender :D')
}else{console.log('Ei, eu não pedi isso!')
};

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

let weekday = 'quarta feira';


if(weekday === 'segunda feira'||weekday === 'terça feira' || weekday === 'quarta feira' || weekday === 'quinta feira' || weekday === 'sexta feira' ){
    console.log('dias de estudo')
}else{console.log('DESCANSO é final de semana!')}

//operador NOT
const numero = 45;
if(numero != 40){
    console.log('a variável numero é diferente de 45')
}else{console.log('a variável numero é igual á 40')
};
console.log(!numero)

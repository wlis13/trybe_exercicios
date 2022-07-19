
//função com apenas uma condição
const sum = (valor1,valor2) => {
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        return 'O valor digitado não corresponde a um número!'
    }
   return valor1 + valor2;
};
console.log(sum(10,15));

//função com o uso do throw para criar cópia do objeto Error
const sum2 = (valorOne,valorTwo) => {

    if(typeof valorOne !== 'number' || typeof valorTwo !== 'number'){

        throw new Error('O valor digitado não corresponde a um número!')
    };

    return valorOne + valorTwo;
};
console.log(sum2(12,12));

//função com o uso do throw,try e catch
const sum3 = (num1,num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        throw new Error('Esse valor não é número!');
    };
};

const sum3a = (num1,num2) => {
    try {
        sum3(num1,num2) 
          return num1 + num2;
        ;
    } catch (error) {
        return error;
    };
};
console.log(sum3a(20,30));
//sintax de uso do try, catch e finally
try {
console.log('inicio das tentativas');

nãoDefinido;

console.log('Fim das tentativas --nunca alcançado');
} catch (err) {
console.log('Um erro ocorreu:' + err.stack)

console.log('o código entre o erro e o catch não é executado')
} finally {
console.log('O finally é sempre executado')
} try {
console.log('o catch deve vir acompanhado do try')
} catch (erro) {
console.log('erro pula outra parte' + erro)
}
console.log('...então a execução continua');

//função com condição de erro caso o valor seja uma string
const somar = (valor1,valor2)  => {

if ( typeof valor1 === 'string' || typeof valor1 === 'string') {

   return ('O valor digitado não é um número!')
};
return valor1 + valor2;

};console.log(somar('10', 20));

//uso de duas funções, para que cada uma fique com menas responsabilidades
const multiplicar = (number1,number2) => {
if(typeof number1 === 'string' || typeof number2 === 'string') {
    throw new Error ('O valor digitado deve ser do tipo (number)');
};
if(typeof number1 === 'undefined'  || typeof number2 === 'undefined') {
    throw new Error(`Sem valor inserido, adicione algum valor em formato numérico!`);
}
if(typeof number1 === 'boolean' || typeof number2 === 'boolean') {
    throw new Error (`Não aceita valores booleanos apenas números`)
}
};

const deVerificacao = (number1,number2) => {
    try {
        multiplicar ( number1, number2 );
        return number1 * number2;

    } catch (error) {
        return error.message;
    }
};console.log(deVerificacao(10,30));


const sum = (valor1,valor2) => {
    if(typeof valor1 !== 'number' || typeof valor2 !== 'number'){
        return 'O valor digitado não corresponde a um número!'
    }
   return valor1 + valor2;
};
console.log(sum(10,15));


const sum2 = (valorOne,valorTwo) => {

    if(typeof valorOne !== 'number' || typeof valorTwo !== 'number'){

        throw new Error('O valor digitado não corresponde a um número!')
    };

    return valorOne + valorTwo;
};
console.log(sum2(12,12));

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
console.log(sum3a('20',30))
const  numberOne = 24;
const  numberTwo = 42;
const numeberThree = 48;

let resultado = false;

if(numberOne % 2 === 1 || numberTwo % 2 === 1 || numeberThree % 2 === 1){
    resultado = true;
};
console.log(resultado);

//exercício extra de função

function impar(a,b,c ){

    let result = false;

    if(numberOne % 2 === 1 || numberTwo % 2 === 1 || numeberThree % 2 === 1 ){

        result = true;

    }
        return result;

}; impar()
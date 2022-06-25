

const numeroUm = 45;
const numeroDois = 17;
const numeroTres = 12;
let resultado;

if(numeroUm % 2 === 0 || numeroDois % 2 === 0 || numeroTres % 2 === 0){


resultado =  true;

}else{

resultado =  false;


};console.log(resultado);


//segundo exercício

function parimpar(p,a,d  ){

let result;

if(p % 2 === 0 || a % 2 === 0 || d % 2 === 0){

  result = true;


}else{ result = false;

}
return result;


};parimpar(12,15,19);

//terceiro exercício

const numero01 = 78;
const numero02 = 65;
const numero03 = 11;

let par = false;

if(numero01 % 2 === 0 || numero02 % 2 === 0 || numero03 % 2 === 0){
  par = true;
}

console.log(par);







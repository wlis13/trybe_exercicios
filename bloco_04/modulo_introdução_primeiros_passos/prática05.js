const numeroUm = 60;
const numeroDois = 60;
const numeroTres = 60;
let erroUm = Math.sign(numeroUm);
let erroDois = Math.sign(numeroDois)
let erroTres = Math.sign(numeroTres)
if (numeroUm + numeroDois + numeroTres === 180){
    console. log (true)
}else if ( erroUm ===  -1 || erroDois === -1 || erroTres === -1){
    console. log ('ERRO!')
}else if(numeroUm + numeroDois + numeroTres != 180){
    console.log(false)
}





let movie = "Avangers";
let firstName = 'wlisses';
let lastName = 'fernando';
let idade = 31;
let dataDeNascimento = '19 de fevereiro de 1991';
console.log(movie,firstName,lastName,idade,dataDeNascimento);

let numeros = [12,36,25,45,78,158,29];
let primos = [];
numeros.forEach((itens)=>{
let divisores = 0;
for(let contador = 0;contador <= itens; contador ++){
if(contador % itens === 0){
divisores ++
}
}
if(divisores === 2){
primos.push(itens)
}
});
console.log(primos)

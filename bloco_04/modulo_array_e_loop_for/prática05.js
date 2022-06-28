let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for(element of numbers){
if(element % 2 === 1){
    impares += 1
}

}
if(impares > 0){
    console.log(impares)
}else{console.log('nenhum valor ímpar encontrado!')}
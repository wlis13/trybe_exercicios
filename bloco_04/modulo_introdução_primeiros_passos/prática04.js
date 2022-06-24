const numeroUm = 45;
const numeroDois = -78;
let negativeOne = Math.sign(numeroUm)
let negativeTwo = Math.sign(numeroDois)

if(negativeOne === -1){
    console.log('negative')
}else if(negativeOne === 1){
    console.log('positive')
}else{console.log('zero')}


if(negativeTwo === -1){
    console.log('negative')
}else if(negativeTwo === 1){
    console.log('positive')
}else{console.log('zero')}

console.log(negativeOne);
console.log(negativeTwo);
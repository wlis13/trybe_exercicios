const aleatorio = (numAleat) => {
numAleat(Math.floor(Math.random() * (6 - 1) + 1), 4);

};

const numeroAposta = (sorteado,apostado) => {
console.log(sorteado === apostado ? `Parabéns voçê ganhou! O número apostado foi: ${apostado} e o sorteado foi: ${sorteado} também!!!`:`Tente novamente, o número apostado foi: ${apostado} e o sorteado foi: ${sorteado}`);

};

aleatorio(numeroAposta);

const aleatorio = (numAleat) => {
numAleat(Math.floor(Math.random() * (6 - 1) + 1), 4);

};

const numeroAposta = (sorteado,apostado) => {
console.log(sorteado === apostado ? `Parabéns voçê ganhou!`:`Tente novamente`);
};

aleatorio(numeroAposta);

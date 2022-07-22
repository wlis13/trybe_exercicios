const momentsDays = (morning, afternoon, evening) => {
    morning('Acordando!!');
    afternoon('Bora tomar um café!!');
    evening('Bora dormir!!')
};
const manha = (firstParameter) => {
    console.log(`O valor do primeiro parâmetro é: ${firstParameter}`)
};

const tarde = (secondParameter) => {
    console.log(`O valor do segundo parâmetro é: ${secondParameter}`);
};

const noite = (thirdParameter) => {
    console.log(`Por último o valor do terceiro parâmetro é: ${thirdParameter}`);
};
momentsDays(manha,tarde,noite)












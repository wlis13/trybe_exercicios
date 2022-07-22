const momentsDays = (morning, afternoon, evening) => {
    morning('Acordando!!');
    afternoon('Bora tomar um café!!');
    evening('Bora dormir!!')
};
const morning = (firstParameter) => {
    console.log(`O valor do primeiro parâmetro é: ${firstParameter}`)
};

const afternoon = (secondParameter) => {
    console.log(`O valor do segundo parâmetro é: ${secondParameter}`);
};

const evening = (thirdParameter) => {
    console.log(`Por último o valor do terceiro parâmetro é: ${thirdParameter}`);
};
momentsDays(morning,afternoon,evening)












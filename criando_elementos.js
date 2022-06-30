let ingredientItem = [
'500g de chocolate',
'80g de doce de leite',
'700g de açucar',
'8 copos de leite',
'2kls de arroz',
'20g de pão',
'600ml de batata',
];


for(element of ingredientItem){


    let itens = document.createElement('li');

    itens.innerText = element

let lista = document.getElementsByClassName('ingredients-list')[0];

lista.appendChild(itens);

};
























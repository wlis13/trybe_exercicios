let listAnimes = [
'dragom ball Z',
'one punch man',
'Cavaleiros do Zodíaco',
'Sakura card captious',
'yu-gi-oh!',
'digimon',
'Samurai X',
'Shurato'
];

let list = document.getElementsByClassName('ingredients-list')[0];


for(let index = 0; index < listAnimes.length; index += 1) {

let itens = document.createElement('li');
itens.innerText = listAnimes[index]
itens.className = 'classeLista';
list.appendChild(itens)

};


let lista = document.getElementsByClassName('classeLista');
for(element of lista){
if(element.innerText.includes('digimon')){
    list.removeChild(element)
}

}

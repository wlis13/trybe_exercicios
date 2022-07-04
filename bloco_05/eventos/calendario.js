function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

let unorderedList = document.getElementById('days');

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for(element of decemberDaysList){
    let itensList = document.createElement('li');
    itensList.innerText = element;
    itensList.className = 'day'
    unorderedList.appendChild(itensList);

}

let feriados = document.querySelectorAll('.day');
for(elemento of feriados){
    if(elemento.innerText.includes(24)){
        elemento.className += ' holiday'
    }

    if(elemento.innerText.includes(25)){
        elemento.className += ' holiday'
    }
    if(elemento.innerText.includes(31)){
        elemento.className += ' holiday'
    }

};

let friDay = document.querySelectorAll('.day');
for(elementos of friDay){
    if(elementos.innerText.includes(14)){
        
    }else if(elementos.innerText.includes(24)){

    }else if(elementos.innerText.includes(4)){
        elementos.className += ' friday';
    };

    if(elementos.innerText.includes(11)){
        elementos.className += ' friday';
    };
    
    if(elementos.innerText.includes(18)){
        elementos.className += ' friday';
    };

    if(elementos.innerText.includes(25)){
        elementos.className += ' friday';
    };
};


let container = document.getElementsByClassName('buttons-container')[0];

function criarBotao (feriados) {
let botao = document.createElement('button');
botao.innerText = 'feriados';
botao.id = 'btn-holiday';
container.appendChild(botao);

};criarBotao();
//"rgb(238,238,238)"

let button = document.getElementById('btn-holiday');
button.addEventListener('click',corfriday)
button.className = 'btc-holiday'

function corfriday () {
    let dia1 = document.getElementsByClassName('holiday')[0];
    dia1.style.backgroundColor = 'purple';
    dia1.style.borderRadius = '10px';
    dia1.style.border = '3px solid green'
    let dia2 = document.getElementsByClassName('holiday')[1];
    dia2.style.backgroundColor = 'purple';
    dia2.style.borderRadius = '10px';
    dia2.style.border = '3px solid green'
    let dia3 = document.getElementsByClassName('holiday')[2];
    dia3.style.backgroundColor = 'purple';
    dia3.style.borderRadius = '10px';
    dia3.style.border = '3px solid green'
};

button.addEventListener('dblclick',retornaCor)
let dia1Novo = document.getElementsByClassName('holiday')[0];
let dia2Novo = document.getElementsByClassName('holiday')[1];
let dia3Novo = document.getElementsByClassName('holiday')[2];

function retornaCor () {
dia1Novo.style.backgroundColor = 'rgb(238,238,238)'
dia2Novo.style.backgroundColor = 'rgb(238,238,238)'
dia3Novo.style.backgroundColor = 'rgb(238,238,238)'
dia1Novo.style.border = 'none'
dia2Novo.style.border = 'none'
dia3Novo.style.border = 'none'
};

let buttonFriday = document.createElement('button')
buttonFriday.innerText = 'Sexta-feira';
container.appendChild(buttonFriday)
buttonFriday.addEventListener('click',duasSextas)

let sextou = document.getElementsByClassName('friday');


function sextasFeiras () {
for(elemento1 of sextou){
elemento1.style.backgroundColor = 'green';
elemento1.style.color = 'white';
}
};

function sextasFeirasInvert () {
    for(elemento2 of sextou){
        elemento2.style.backgroundColor= "rgb(238,238,238)"
        elemento2.style.color = '#777'
    }
};

function duasSextas () {
    if(buttonFriday === addEventListener('click',sextasFeiras)){
        buttonFriday = addEventListener('click',sextasFeirasInvert)
    
    }else(buttonFriday = addEventListener('click',sextasFeiras));
    
}







































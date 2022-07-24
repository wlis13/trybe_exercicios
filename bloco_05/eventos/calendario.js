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
botao.addEventListener('click',funcaoFeriados)
};criarBotao();
                                                                                //"rgb(238,238,238)"
let referencia2 = false;

function funcaoFeriados () {
    let todosFeriados = document.getElementsByClassName('holiday');
    if(referencia2 === false){
        todosFeriados[0].style.backgroundColor = 'purple';
        todosFeriados[0].style.color = 'white';
        todosFeriados[1].style.backgroundColor = 'purple';
        todosFeriados[1].style.color = 'white';
        todosFeriados[2].style.backgroundColor = 'purple';
        todosFeriados[2].style.color = 'white';
      
        referencia2 = true;
    }else{todosFeriados[0].style.backgroundColor = "rgb(238,238,238)"
todosFeriados[0].style.color = '#777';
todosFeriados[1].style.backgroundColor = "rgb(238,238,238)"
todosFeriados[1].style.color = '#777';
todosFeriados[2].style.backgroundColor = "rgb(238,238,238)"
todosFeriados[2].style.color = '#777';

referencia2 = false;}
}

function criarNovoBotao () {
    let novoBotao = document.createElement('button');
    novoBotao.innerText = 'Sexta-feira';
    container.appendChild(novoBotao);
    novoBotao.addEventListener('click',duasSextas)
};criarNovoBotao()

let referencia1 = false;

function duasSextas () {
    let sextasFeiras = document.getElementsByClassName('friday');
    if(referencia1 === false){
        sextasFeiras[0].style.backgroundColor = 'green';
        sextasFeiras[0].style.color = 'white';
        sextasFeiras[1].style.backgroundColor = 'green';
        sextasFeiras[1].style.color = 'white';
        sextasFeiras[2].style.backgroundColor = 'green';
        sextasFeiras[2].style.color = 'white';
        sextasFeiras[3].style.backgroundColor = 'green';
        sextasFeiras[3].style.color = 'white';
        referencia1 = true;
    }else{sextasFeiras[0].style.backgroundColor = "rgb(238,238,238)"
    sextasFeiras[0].style.color = '#777'
    sextasFeiras[1].style.backgroundColor = "rgb(238,238,238)"
    sextasFeiras[1].style.color = '#777'
    sextasFeiras[2].style.backgroundColor = "rgb(238,238,238)"
    sextasFeiras[2].style.color = '#777'
    sextasFeiras[3].style.backgroundColor = "rgb(238,238,238)"
    sextasFeiras[3].style.color = '#777'

referencia1 = false;}
};


































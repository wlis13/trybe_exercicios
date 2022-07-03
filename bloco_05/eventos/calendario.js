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
    if(elementos.innerText.includes(04)){
        elementos.className += ' friday'
    }
}






















































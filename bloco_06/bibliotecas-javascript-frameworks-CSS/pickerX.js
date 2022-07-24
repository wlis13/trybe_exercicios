let title = document.getElementById('title');
title.innerText = 'confira as horas';
function Horario () {
let horario = new Date()
let hours = horario.getHours();
let minutes = horario.getMinutes();
let seconds = horario.getSeconds();
let paragrafo = document.getElementById('paragrafo');
if(seconds < 10 ){
    seconds = '0' + seconds;
   
};
if(minutes < 10){
    minutes = "0" + minutes
};

paragrafo.innerText = 'Horário de Brasília ' + '( ' + hours + ' : ' + minutes + ' : ' + seconds + ' )';
};setInterval(Horario,500)
















let minuts = document.getElementById('minutos');
let seconds = document.getElementById('segundos');
let display = document.getElementById('display');
let buttonStart = document.getElementById('começar');
let buttonStop = document.getElementById('stop');
let container = document.querySelector('.container');
let buttonReset = document.getElementById('reset');
let mile = document.getElementById('mile');
let paragrafo = document.getElementById('paragrafo');

let zeroMinuts = minuts.value;
let zeroSeconds = seconds.value < 10 ? '0' + seconds.value : seconds.value;
let interval;

container.addEventListener('change', () => {
  zeroMinuts = minuts.value;
  zeroSeconds = seconds.value;
  if (zeroMinuts > 60 || zeroSeconds > 60) {
    display.innerText = 'O valor deve ser menor ou igual á 60!'
  } else {
    display.innerText = `${ zeroMinuts } : ${ zeroSeconds }`;
  }
})



buttonStart.addEventListener('click', () => {

  interval = setInterval(function () {
    zeroSeconds--;
    if (zeroSeconds < 0) {
      zeroMinuts--;
      zeroSeconds = 59;
    }

    let seg = zeroSeconds < 10 ? '0' + zeroSeconds : zeroSeconds;
    let min = zeroMinuts < 10 ? '0' + zeroMinuts : zeroMinuts;
    display.innerText = `${ min } : ${ seg }`;

    if (seg === '00' && min === '0' || seg === '00' && min === '00') {
      display.innerText = "The End";
      document.getElementById('audio').play()
      clearInterval(interval);
    }

  }, 1000)
})

buttonStop.addEventListener('click', () => {
  clearInterval(interval);
});

buttonReset.addEventListener('click', () => {
  clearInterval(interval);
  zeroMinuts = minuts.value;
  zeroSeconds = seconds.value;
  display.innerText = '00:00'
});

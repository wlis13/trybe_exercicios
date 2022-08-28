let minuts = document.getElementById('minutos');
let seconds = document.getElementById('segundos');
let display = document.getElementById('display');
let buttonStart = document.getElementById('começar');
let buttonStop = document.getElementById('stop');
let container = document.querySelector('.container');
let buttonReset = document.getElementById('reset');
let zeroMinuts = minuts.value < 10 ? '0' + minuts.value : minuts.value;
let zeroSeconds = seconds.value < 10 ? '0' + seconds.value : seconds.value;
let interval;

container.addEventListener('change', () => {
  zeroMinuts = minuts.value < 10 ? '0' + minuts.value : minuts.value;
  zeroSeconds = seconds.value < 10 ? '0' + seconds.value : seconds.value;
  display.innerText = `${ zeroMinuts } : ${ zeroSeconds }`;
})
buttonStart.addEventListener('click', () => {

  interval = setInterval(function () {
    zeroSeconds--;
    if (zeroSeconds < 0) {
      zeroMinuts--;
      zeroSeconds = 59;
    }

    let seg = zeroSeconds < 10 ? '0' + zeroSeconds : zeroSeconds;


    display.innerText = `${ zeroMinuts } : ${ seg }`;

    if (zeroMinuts === '0' + 0 && seg === '0' + 0) {
      display.innerText = "Acabou!";
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




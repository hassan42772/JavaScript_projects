let pause = document.querySelector('.btn-Pasue');
let play = document.querySelector('.btn-play');
let reset = document.querySelector('.btn-reset');
let time = document.querySelector('.Timer-displayer');


let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;

play.addEventListener('click', function(){
    timer = setInterval(function(){
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        if(hours == 24){
            seconds = 0;
            minutes = 0;
            hours = 0;
        }
     
        time.innerHTML = `${hours < 10 ? '0'+hours  : hours}:${minutes< 10 ? '0'+minutes  : minutes}:${seconds< 10 ? '0'+seconds  : seconds}`;
    }, 1000);
});

pause.addEventListener('click', function(){
    clearInterval(timer);
    console.log('pause');
});

reset.addEventListener('click', function(){
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    time.innerHTML = '00:00:00';
});
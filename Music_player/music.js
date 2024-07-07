let pause = document.querySelector('.pauseButton');
let exit = document.querySelector('.Back');
let gif = document.querySelector('.gif');
let song = document.querySelector('#song');
let slider = document.querySelector('#Slider');
let sliderTime = document.querySelector('.sliderTime');
let songList = document.querySelector('#songList');
let song_name = document.querySelector('.musicName');
let song_artist = document.querySelector('.artistName');
let forwardButton = document.querySelector('.forwardButton');
let backwardButton = document.querySelector('.reverseButton');





pause.addEventListener('click', () => {
    if (pause.classList.contains('paused')) {
        pause.classList.remove('paused');
        pause.innerHTML = '<i class="fa-solid fa-stop"></i>';
        song.play();
        gif.style.display = 'block';
    } else if (!pause.classList.contains('paused')) {
        pause.classList.add('paused');
        song.play();

        pause.innerHTML = '<i class="fa-solid fa-play"></i>';
        gif.style.display = 'none';
        song.pause();
    }

});

song.onloadedmetadata = () => {
    slider.max = song.duration;
    slider.value = song.currentTime;
};

exit.addEventListener('click', () => {
    window.close();
});

slider.onchange = () => {
    song.currentTime = slider.value;
    pause.innerHTML = '<i class="fa-solid fa-stop"></i>';
    gif.style.display = 'block';
    song.play();
};

song.addEventListener('ended', () => {
    song.currentTime = 0;
    slider.value = 0;
    song.pause();
    pause.classList.add('paused');
    pause.innerHTML = '<i class="fa-solid fa-play"></i>';
    gif.style.display = 'none';
});

songList.addEventListener('change', () => {
    song.pause();
    song.load();
    song.src = songList.value;
    gif.style.display = 'none';
    pause.innerHTML = '<i class="fa-solid fa-play"></i>';
    song_name.innerHTML = songList.options[songList.selectedIndex].label;
    song_artist.innerHTML = songList.options[songList.selectedIndex].text;
});

setInterval(() => {
    slider.value = song.currentTime;
    let minutes = Math.floor(song.currentTime / 60);
    let seconds = Math.floor(song.currentTime % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    sliderTime.innerHTML = `${minutes}:${seconds}`;
}, 1000);

forwardButton.addEventListener('click', () => {
    song.currentTime += 10;
});


backwardButton.addEventListener('click', () => {
    song.currentTime -= 10;
});

let gallery = document.querySelector('.gallery');
let back = document.querySelector('.forward');
let next = document.querySelector('.Reverse');


gallery.addEventListener('wheel', (e) => {
    gallery.scrollLeft += e.deltaY;
});

back.addEventListener('click', (e) => {

    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft -= 900;
})

next.addEventListener('click', (e) => {
  
    gallery.style.scrollBehavior = 'smooth';
    gallery.scrollLeft += 900;
});
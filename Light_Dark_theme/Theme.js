let mode_heading = document.querySelector('.mode_heading');
let mode = document.querySelector('.mode');



mode.addEventListener('click', () => {
    if(mode.innerHTML.includes('moon')) {
        document.body.classList.toggle('dark-theme');
    }
    else {
        document.body.classList.remove('dark-theme');
    }
    mode_heading.innerHTML.includes('Light') ? mode_heading.innerHTML = 'Dark Mode' : mode_heading.innerHTML = 'Light Mode';
    mode.innerHTML.includes('moon') ? mode.innerHTML = '<i class="fas fa-sun"></i>' : mode.innerHTML = '<i class="fas fa-moon"></i>';
});
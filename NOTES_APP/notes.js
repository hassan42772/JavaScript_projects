const CreateBtn = document.querySelector('.btn');
const note_conatiner = document.querySelector('.note_container');
let note = document.querySelector('.notes');
let createimg;
document.addEventListener("click", (e) => {
    console.log(e.target.tagName);
});

CreateBtn.addEventListener('click', () => {
    let inputarea = document.createElement('p');
    createimg = document.createElement('img');
    createimg.src ="./trash.png";
    inputarea.className = 'notes';
    inputarea.setAttribute('contenteditable', 'true');
    note_conatiner.appendChild(inputarea).appendChild(createimg);
   


   
});

console.log(note);
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
       saveNote();
    }
    else if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        saveNote();

    }
});
function saveNote() {
    localStorage.setItem("note",  note_conatiner.innerHTML);
}

function shownotes() {
    note_conatiner.innerHTML = localStorage.getItem("note");
}
shownotes();

document.addEventListener("keydown", function (e) { 
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak")
        e.preventDefault();
        
    }
});
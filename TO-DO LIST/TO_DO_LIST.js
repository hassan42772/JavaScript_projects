let input_box = document.querySelector('#text');
let add_btn = document.querySelector('.button');
let listcontainer = document.querySelector('.list_container');

add_btn.addEventListener('click', function(e){
    e.preventDefault();
    if(input_box.value === ''){
        alert('Please enter a task');
        return;
    }
    else{
    let li = document.createElement('li');
    li.innerHTML = input_box.value;
    listcontainer.appendChild(li);

    let del_btn = document.createElement('button');
    del_btn.innerHTML = '❌';
    del_btn.style.backgroundColor = 'transparent';
    del_btn.style.border = 'none';
    del_btn.style.color = 'red';
    del_btn.style.cursor = 'pointer';
    del_btn.style.position = 'absolute';
    del_btn.style.right = '10px';
    li.appendChild(del_btn);
    
    }
    input_box.value = '';
    datasaver();
});


listcontainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        datasaver();
    }
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        datasaver();
    }
   
});

function datasaver() {
    localStorage.setItem('task', listcontainer.innerHTML);
}
function showdata() {
    listcontainer.innerHTML = localStorage.getItem('task');
}
showdata();
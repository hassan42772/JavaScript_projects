let Allbutton = document.querySelectorAll('.beautiful-button');
let snake_container = document.querySelector('.Snake_container');
let success = '<i class="fa-solid fa-circle-check"></i>Successfully Done';
let error = '<i class="fa-solid fa-circle-xmark"></i>Error Occured';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i>Invalid Input';
CheckButton = (msg) => {
    let notification = document.createElement('div');
    notification.classList.add('notification_bar');
    notification.innerHTML = msg;
    snake_container.appendChild(notification);
    if (notification.innerHTML.includes('Error')) {
        notification.classList.add('error');
    }
    if (notification.innerHTML.includes('Invalid')) {
        notification.classList.add('invalid');
        
    }
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

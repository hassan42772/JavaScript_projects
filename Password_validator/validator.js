let nameerror = document.querySelector('.NameError');
let phoneerror = document.querySelector('.PhoneError');
let emailerror = document.querySelector('.EmailError');
let msgerror = document.querySelector('.MsgError');
let submit = document.querySelector('.submitError');
let submitBtn = document.querySelector('.data');
// fields
let ContactName = document.querySelector('.ContactName');
let phone = document.querySelector('.ContactPhone');
let email = document.querySelector('.ContactEmail');
let msg = document.querySelector('.ContactMsg');

// Validation functions
function validateName() {
    if (ContactName.value.length == 0) {
        nameerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Name is required";
        phone.disabled  = true;
        email.disabled = true;
        msg.disabled = true;
        return false;
    } 
    if (!ContactName.value.match(/^[a-zA-Z]+(\s[a-zA-Z]+)*$/)) {
        nameerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Invalid! Use Alphabets only";
        phone.disabled  = true;
        email.disabled = true;
        msg.disabled = true;
        return false;
    } 
    nameerror.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    submit.innerHTML = "";
    phone.disabled  = false;
    email.disabled = false;
    msg.disabled = false;
    submitBtn.disabled = true;
    return true;
}

function validatePhone() {
    if (phone.value.length == 0) {
        phoneerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Phone is required";
        email.disabled = true;
        msg.disabled = true;
        return false;
    }
    if (!phone.value.match(/^[0-9]{11}$/)) {
        phoneerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Invalid! Use 11 digits only";
        email.disabled = true;
        msg.disabled = true;
        return false;
    } 
    phoneerror.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    submit.innerHTML = "";
    email.disabled = false;
    msg.disabled = false;
    submitBtn.disabled = true;

    return true;
}

function validateEmail() {
    if (email.value.length == 0) {
        emailerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Email is required";
        msg.disabled = true;
        return false;
    }
    if (!email.value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        emailerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Invalid Email";
        msg.disabled = true;
        return false;
    }
    emailerror.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    submit.innerHTML = "";
    msg.disabled = false;
    submitBtn.disabled = true;

    return true;
}

function validateMsg() {
    if (msg.value.length == 0) {
        msgerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Message is required";
        return false;
    }
    if (msg.value.length < 16) {
        msgerror.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        submit.innerHTML = "Message is too short (min 16 characters)";
        return false;
    }
    msgerror.innerHTML = '<i class="fa-solid fa-circle-check" ></i>';
    submit.innerHTML = "";
    submitBtn.disabled = false;
    return true;
}

// Event Listeners
ContactName.addEventListener('keyup', function() {
    if (validateName()) {
    } else {
        phone.disabled = true;
        email.disabled = true;
        msg.disabled = true;
    }
});

phone.addEventListener('keyup', function() {
    if (validatePhone()) {
        email.disabled = false;
    } else {
        email.disabled = true;
        msg.disabled = true;
    }
});

email.addEventListener('keyup', function() {
    if (validateEmail()) {
        msg.disabled = false;
    } else {
        msg.disabled = true;
    }
});

msg.addEventListener('keyup', function() {
    validateMsg();
    submitBtn.disabled = false;    
});

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Form Submitted Successfully' + '\n' + 'Name: ' + ContactName.value + '\n' + 'Phone: ' + phone.value + '\n' + 'Email: ' + email.value + '\n' + 'Message: ' + msg.value);
    ContactName.value = '';
    phone.value = '';

    email.value = '';
    msg.value = '';
})
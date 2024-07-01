let input_area = document.querySelector("#Password")
let copy_button = document.querySelector(".copy_btn")
let generate_button = document.querySelector(".Generator")



let password_length = 12;
let password;

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+";
let password_characters = upperCase + lowerCase + numbers + symbols;

generate_button.addEventListener("click", generatePassword);

function generatePassword() {
    password = "";
    
    console.log(password += upperCase[Math.floor(Math.random() * upperCase.length)])
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    while (password.length < password_length){
        password += password_characters[Math.floor(Math.random() * password_characters.length)];
    }
    input_area.value = password;
    
}


copy_button.addEventListener("click", function () {
    input_area.select();
    document.execCommand("copy");
});
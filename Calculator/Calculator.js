let display = document.getElementById('text');
let buttons = document.querySelectorAll('button');

let btn = Array.from(buttons);

let str = "";
btn.forEach(button => {
    button.addEventListener('click', (e) => {
        


        console.log(e.target.innerText);
        if (e.target.innerText == 'AC') {
            str = '';
            display.value = str;
        } 
        else if (e.target.innerHTML == '=' && display.value == '' || display.value.includes('+').length > 1 ) {
            display.value = '0';

        }
        else if (e.target.innerHTML == '=' &&  display.value.includes('++') || display.value.includes('+-') || display.value.includes('-+') || display.value.includes('-+-') || display.value.includes('*-') || display.value.includes('/-') || display.value.includes('*+') || display.value.includes('/+')  ) {
            display.value = 'syntax error';

        }
        else if (e.target.innerHTML == '=' &&  display.value.includes('--') ) {
            display.value = 'syntax error';

        }
        else if (e.target.innerHTML == '=' &&  display.value.includes('**') ) {
            display.value = 'syntax error';

        }
        else if (e.target.innerHTML == '=' &&  display.value.includes('//') ) {
            display.value = 'syntax error';

        }
        else if (e.target.innerHTML == '=' &&  display.value.includes('..') ) {
            display.value = 'syntax error';

        }
        else if (e.target.innerHTML == 'DEL') {
            str = str.slice(0, -1);
            display.value = str;
        }
        else if (e.target.innerHTML == '=') {
            str = eval(str);
            display.value = str;
        }
      
        else {
           str += e.target.innerHTML;
              display.value = str;
        }
       
    });
});
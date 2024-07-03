let result = document.querySelector('.result');
let date = document.querySelector('#date');
let btn = document.querySelector('.btn');


function calculate_old(){
    const Date_ = new Date();
    date.max = Date_.toISOString().slice(0, 10);
    
    let birthDate = new Date(date.value);
    
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();
    
    let todayDate = new Date(Date_.toISOString().slice(0, 10));
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth()+1;
    let y2 = todayDate.getFullYear();
    
    let d3 , m3 , y3;
    y3 = y2 - y1;
    if(m2 >= m1){
        m3 = m2 - m1
    }
    else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2 - d1;
    }
    else{
        m3--;
        d3 = calculate_birthdate(y2,m2) + d2 - d1;
    }
    if(m3<0){
        y3--;
       m3 = 11;
    }
    result.innerHTML = `Your Age is <span>${y3}</span>years <span> ${m3}</span> months<span> ${d3}</span>days old.`;
    date.innerHTML = '';
}

btn.addEventListener('click',calculate_old);


function calculate_birthdate(year,month){
    return new Date(year,month,0).getDate();
}
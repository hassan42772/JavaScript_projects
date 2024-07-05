let qr_img = document.querySelector('#Qr_image');
let generate_btn = document.querySelector('#generate');
let input = document.querySelector('#input');
let img_container = document.querySelector('.qr_image_container');
let download_link = document.querySelector('#download_link');

generate_btn.addEventListener('click', () => {
    if (!input.value) {
        alert('Please Enter a Value');
        return;
    } else{
        let qr_url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(input.value);
        qr_img.src = qr_url;
        qr_img.onload = () => {
            console.log('QR Code Generated');
            img_container.classList.add('new_qr');
            download_link.href = qr_url;
            download_link.style.display = 'inline-block';
            download_link.download = 'qr_code.png';
            input.value = '';
        };
    }

  
});

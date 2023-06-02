// menu renposive 

const btn_mobile = document.getElementById('btn-mobile');


btn_mobile.addEventListener('click' , (e) =>{
    document.querySelector('#menu-rp').classList.toggle('show');
    document.querySelector('.fa-bars').classList.toggle('fa-x');
});



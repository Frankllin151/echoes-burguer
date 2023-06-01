// menu renposive 

const btn_mobile = document.getElementById('btn-mobile');


btn_mobile.addEventListener('click' , (e) =>{
    document.querySelector('#menu-rp').classList.toggle('show');
    document.querySelector('.fa-bars').classList.toggle('fa-x');
});


function UpdateMobileWidth() {
    var widthLargura = window.innerWidth;

    if (widthLargura < 414) {
        document.querySelector('#btn-hym').classList.add('btn-gh');
        document.querySelector('#btn-hym').classList.remove('email-btn');
    } else {
        document.querySelector('#btn-hym').classList.remove('btn-gh');
        document.querySelector('#btn-hym').classList.add('email-btn');
    }
}

UpdateMobileWidth();






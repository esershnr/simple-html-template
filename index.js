const toTop = document.querySelector('#toTop');

const icon = document.querySelector('.fas');

const menu = document.querySelector('#menu-container');

const btnModal = document.querySelector('.btn-1');

const modal = document.querySelector('.modal-bg');

const modalReal = document.querySelector('.modal-bio')

const modalQuit = document.querySelector('.modal-kapat');

const btnRes = document.querySelector('.res-btn');

const ulMenu = document.querySelector('.navbar-ul');

const mobileMenu = document.querySelector('.mobile-menu-l');

window.addEventListener('scroll', () => {
    if(window.pageYOffset > 115){
        toTop.classList.add('active');
        menu.classList.add('active');
    }else{
        toTop.classList.remove('active');
        menu.classList.remove('active');
    }
}) 

btnRes.addEventListener('click', () => {
    ulMenu.classList.toggle('responsive-m');
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');
    mobileMenu.classList.toggle('responsive-m');
})

btnModal.addEventListener('click', ()=>{
    modal.classList.add('active');
    modalReal.classList.add('active');
})

modalQuit.addEventListener('click', ()=>{
    modal.classList.remove('active');
    modalReal.classList.remove('active');
})

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});


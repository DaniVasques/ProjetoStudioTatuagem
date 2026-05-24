//alert('JS Carregado');

//Seleção de Document Object Model (DOM)

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');

let links = document.querySelectorAll('.menu a'); //NodeList -> Array-like (Array-like -> forEach, length, index)

//console.log(btnMenu);
//console.log(menu);

function manipularMenu() {
    //console.log('Função acionada');
    //add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

function fecharMenu() {
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
}

//Eventos -> Ações (Gatilhos) normalmente realizadas pelo usuário
btnMenu.addEventListener('click', manipularMenu);
//menu.addEventListener('click',fecharMenu);
links.forEach(function (link) {
    link.addEventListener('click', fecharMenu);
});

//animação em gsap
//HERO
gsap.from('.hero h1', {
    opacity: 0,
    duration: 5,
    ease: "power3.out",
    x: -100
});

gsap.from('.hero p:not(.slogan)', {
    opacity: 0,
    duration: 2,
    x: -100,
    delay: 0.5
});

gsap.from('.hero .slogan', {
    opacity: 0,
    duration: 2,
    x: -100,
    delay: 0.5
});
gsap.from('.hero .container-btn', {
    opacity: 0,
    duration: 2,
    x: -100,
    delay: 0.5
});


//SOBRE
gsap.from('.sobre-image, .sobre-content', {
    opacity: 0,
    duration: 2,
    y: 100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.sobre',
        start: 'top, 60%',
    }
});

//MISSÃO
gsap.from('.missao .container-btn, .missao h2, .missao p ', {
    opacity: 0,
    duration: 2,
    x: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.missao',
        start: 'top, 50%',
    }
});

//ARTISTAS
gsap.from('.artistas .swiper-slide', {
    opacity: 0,
    duration: 1.5,
    scale:0.10,
    x: -400,
    stagger: 1.0,
     scrollTrigger: {
        trigger: '.artistas',
        start: 'top, 50%',
    }

});
gsap.from('.artistas h2, .artistas p ', {
    opacity: 0,
    duration: 2,
    x: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.artistas',
        start: 'top, 50%',
    }
});


//AGENDE
gsap.from('.agende .container-btn, .agende h2, .agende p ', {
    opacity: 0,
    duration: 2,
    x: -100,
    stagger: 0.5,
    scrollTrigger: {
        trigger: '.agende',
        start: 'top, 50%',
    }
});

//DEPOIMENTOS
gsap.from('.depoimentos .swiper-slide', {
    opacity: 0,
    duration: 1.5,
    scale:0.10,
    x: -100,
    stagger: 1.0,
     scrollTrigger: {
        trigger: '.depoimentos',
        start: 'top, 50%',
    }

});

gsap.from('.depoimentos', {
    opacity: 0,
    duration: 4,
    scrollTrigger: {
        trigger: '.depoimentos',
        start: 'top, 60%',
    }
});



//FALE CONOSCO
gsap.from('.fale-conosco', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: '.fale-conosco',
        start: 'top, 60%',
    }
});







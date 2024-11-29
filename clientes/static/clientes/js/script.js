//cambiar el header cuando el usario haga scroll

const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 60)
})
/*
// Mostrar un mensaje de alerta cuando haga clic en el botón 

document.querySelector('.btn').addEventListener('click', function(){
    alert('¡Tu reserva a sido guardada!');
});

document.querySelector('.bot').addEventListener('click', function(){
    alert('¡Membresia registrada!');
});

// aplicar a todos los botones de clase .btn
document.querySelectorAll('.btn').forEach(function(button){
    button.addEventListener('click', function(){
        alert('¡Tu reserva a sido guardada!')
    })
})
*/

// funcion para el primer boton
document.getElementById("btn-Reservar").addEventListener('click', function(){
    alert("Reserva registrada");
})

//funcion para el segundo boton 
document.getElementById("btn-Explorar").addEventListener('click', function(){
    alert("Membresia guardada");
})

//seleccionar todos los enlaces dentro de la clase .navbar

document.querySelectorAll('.navbar a[href^="#"]').forEach(function(enlace){
    enlace.addEventListener('click', function(e){
        e.preventDefault(); //prevenir comportamiento por defecto del enlace
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'instant'
        })
    })
})

//cambiar imagen de fondo cada n segundos

const imagenes = [
    '/static/clientes/img/fondo.jpg',
    '/static/clientes/img/mesass.jpg',
    '/static/clientes/img/restau.jpg',
    '/static/clientes/img/rest.avif'
];

const homeSection = document.querySelector('.home');
const intervalo = 5000; // 5000 ms= 5s
let indiceImage = 0;

function cambiarFondo(){
    homeSection.style.backgroundImage = `linear-gradient(to left,
    rgba(85, 170, 160, 0.7), 
    rgba(42, 72, 112, 0.7)
    ), url(${imagenes[indiceImage]})`;
    indiceImage = (indiceImage + 1) % imagenes.length;
}

setInterval(cambiarFondo, intervalo);

//mostrar menú en pantallas pequeñas 

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let enlaces = document.querySelectorAll('.navbar a');

menu.onclick = () => {
    navbar.classList.toggle('open');
    menu.classList.toggle('bx-x')
}

enlaces.forEach(link => {
    link.onclick = () => {
        navbar.classList.remove('open');
         menu.classList.remove('bx-x');
    }
})

//animacion de texto

var typed = new Typed('#typed', {
    strings: ['Tu mejor opción', 'Disfruta en el restaurante de tu gusto', 'Disponible en el horario que desees'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar:"_",
    backSpeed:20,
})

//animacion de nuestro 2 texto con imagen y boton

var typed2 = new Typed('#typed2', {
    strings: ['Puedes visitarnos', 'Dale clic ahora', 'No te puedes perder esta oferta'],
    typeSpeed: 50,
    loop: "true",
    showCursor: "true",
    cursorChar:"_",
    backSpeed:20,
})
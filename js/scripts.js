console.log("Funciona correctamente");

/**
 * querySelector ----------------------------------------------------------------------
 */
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 Elementos
heading.textContent = 'Nuevo Heading';
console.log(heading);

/**
 * querySelectorAll ---------------------------------------------------------------------
 */
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Quines somos'; // Cambiar texto del enlace
enlaces[0].classList.add('nueva-clase'); // Agregar nueva clase al enlace
// enlaces[0].classList.remove('navegacion__enlace'); // Remover nueva clase al enlace

/**
 * Generar nuevo enlace ------------------------------------------------------------------
 */

const nuevoEnlace = document.createElement('A');

// Agregar el href

nuevoEnlace.href = 'nuevo-enlace.html';

// Agregar el texto
nuevoEnlace.textContent = 'Un nuevo Enlace';

// Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

// Agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace); //Asignar elemento en el html

console.log(nuevoEnlace);
console.log(navegacion);

/**
 * Eventos en JavaScript ------------------------------------------------------------------
 */

// console.log(1);

// // load espera a que el JS y los archivos que dependen del HTML estén listos incluyendo imagenes y CSS
// window.addEventListener('load', imprimir);

// // load espera a que el JS y los archivos que dependen del HTML estén listos incluyendo imagenes y CSS
// window.onload = function() {
//     console.log(3);
// }

// // Solo espera por el HTML, no espera CSS o imagenes
// document.addEventListener('DOMContentLoaded', function() {
//     console.log(4);
// });

// console.log(5);

// function imprimir() {
//     console.log(2);
// }

// window.onscroll = function() {
//     console.log('Scrolling...');
// }

/**
 * Seleccionar elementos y asociales un evento
 */

// const btnEnviar = document.querySelector('.boton--primario');

// btnEnviar.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Enviar formulario');
// })

/**
 * Eventos de los Inputs y Textarea
 */

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
/**
 * Evento de submit
 */
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    // Validar formulario

    const { nombre, email, mensaje } = datos;

    if (nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Todos los campos son obligatorios', true);
        return; // finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.
    }

    mostrarAlerta('El formulario se envio correctamente');

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    // Enviar formulario
    console.log('Enviando formulario');
});

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    // console.log(datos);
}

// Muestra un error en pantalla

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if (error) {
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);
    // Desaparesca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);

}
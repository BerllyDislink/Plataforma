//Registro 


const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const Registro = document.querySelector('.registrarse');
const open = document.querySelector('.perfil')
const close = document.querySelector('.menuToggle')



Registro.addEventListener('click', ()=> {
     wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
     wrapper.classList.remove('active');
} );

//Productos

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

//Cuando Click en punto
//Saber posición en punto
//Aplicar TransformTranslatex al grande
//Quita la clase active al punto
//Añadir la clase activo al punto quee hemos hecho click

punto.forEach((_cadaPunto, i)=> {
     punto[i].addEventListener('click',()=>{
         let posicion = i;
         let operacion = posicion * -50;
          grande.style.transform = `translateX(${ operacion}%)`;
     });
});
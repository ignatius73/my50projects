const open = document.querySelector('#open')
const close = document.querySelector('#close')
const nav = document.querySelector('.show-nav')
const content = document.querySelector('.content')
const navegacion = document.querySelector('nav')


open.addEventListener('click',()=>{
    console.log('adding')
    nav.classList.remove('rotateButton')
    content.classList.remove('rotateContent')
    navegacion.classList.remove('oculta-nav')
    navegacion.classList.add('muestra-nav')
   
    nav.classList.add('changeButton');
    content.classList.add('giroContent')

})
close.addEventListener('click',()=>{
    console.log('adding')
    nav.classList.remove('changeButton')
    content.classList.remove('giroContent')
    nav.classList.add('rotateButton')
    content.classList.add('rotateContent')
    navegacion.classList.add('oculta-nav')
    navegacion.classList.remove('muestra-nav')

   
    

})
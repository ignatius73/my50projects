const button = document.querySelector('button')
const button1 = document.querySelector('.oculto')
const input = document.querySelector('input')


input.addEventListener('keydown', (e)=>{
    console.log(e)
    if(e.code == 'Enter')  console.log('Buscá')
})


button.addEventListener('click', (e)=>{
        e.preventDefault()
        input.classList.add('expand')
        if(input.value != ''){
            console.log('Buscá')
        }
})




/* button.addEventListener('mouseover', ()=>{
    console.log('hover')

    input.classList.add('expand')



})
button.addEventListener('mouseleave', ()=>{
    console.log('hover')

    input.classList.remove('expand')



}) */
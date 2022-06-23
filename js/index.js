const cards = document.querySelectorAll('.cards')

const xhr = new XMLHttpRequest;
let resp;



function obtengoImage(){

    /**
     * Obtengo un numero entero al azar dentro de un rango
     */
    
    
    const number = Math.floor(Math.random() * (10 - 1) + 1 );
    return number

}


xhr.addEventListener('readystatechange', ()=>{
    if(xhr.readyState == 4){
        
        resp = JSON.parse(xhr.response)
        cards.forEach( (card,idx) =>{
            
            console.log(resp[idx].urls.regular)
            card.style.backgroundImage = `url(${resp[idx].urls.regular})`
            const h2 = document.createElement('h2')
            h2.textContent = resp[idx].user.name
            card.appendChild(h2)
           
                card.addEventListener('click', (e)=>{
                    removeActive()
                    e.target.classList.add('active')
        
                })

    })
   
    }
})

window.addEventListener('load', ()=>{
    const page = obtengoImage()
    xhr.open('get',`https://api.unsplash.com/photos/?client_id=9p_yrYtMYw28GWfGK0VStpp3a7ry1OwxB_a1HeQDQl4&page=${page}`)
    xhr.send()

})

function removeActive(){
    cards.forEach( card=>{
        card.classList.remove('active')
    })
}

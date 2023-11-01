const header = document.getElementById('header')
addEventListener('scroll', (event) => {
    if (this.scrollY > 100) {
        header.classList.add('header--fill')
    } else {
        header.classList.remove('header--fill')
    }
})



/*const testimonios = document.querySelectorAll('.elemento_testimonio') 
testimonios.forEach((testi) => {
    testi.firstElementChild.style.height = `${testi.getBoundingClientRect().height+13} px`
})*/
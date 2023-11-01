const form = document.getElementById('login_form')

if (form) {
    console.log('esasfa')
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event);
        const email = event.target.element.email.value
        const password = event.target.element.password.value
        

        //email: admin@gmail.com password: admin12345 //

        if (email === 'admin@gmail.com' && password === 'admin12345') {
            localStorage.setItem('HAS_USER', 'true')
            window.location = '../views/admin.html'
            console.log('kkk')
        }
    })
}
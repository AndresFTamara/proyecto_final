const form = document.getElementById('login-form')

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const email = event.target.elements.email.value
    console.log(email)
    const password = event.target.elements.password.value
    console.log(password)

    // email: admin@gmail.com; password: admin12345 //

    if (email === 'admin@gmail.com' && password === 'admin12345') {
      localStorage.setItem('HAS_USER', 'true')
      
      window.location = '../views/admin.html'
    }
  })
}
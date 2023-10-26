const hasUser = JSON.parse(localStorage.getItem('HAS_USER'))
console.log(hasUser);

if (hasUser) {
    window.location = '../../index.html'
}

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem ('HAS_USER')
    })
}
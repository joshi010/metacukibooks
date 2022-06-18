let ham = document.querySelector('.ham');
const navOptions = document.querySelector('.nav-options')

ham.onclick = () => {
    navOptions.classList.toggle('show');
}

window.onscroll = () => {
    const nav = document.querySelector('.nav');
    if(window.pageYOffset > 350){
        nav.classList.add('nav-shadow');
    } else {
        nav.classList.remove('nav-shadow')
    }
}
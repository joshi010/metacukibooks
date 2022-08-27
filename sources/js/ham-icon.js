//ham-icon
let ham = document.querySelector('.ham');
const navOptions = document.querySelector('.nav-options')
const serach = document.querySelector('.search-inicio');

ham.onclick = () => {
    navOptions.classList.toggle('show');
}

window.onscroll = () => {
    const nav = document.querySelector('.nav');
    if(window.pageYOffset > 350){
        nav.classList.add('nav-shadow');
        serach.classList.add('contorn');
    } else {
        nav.classList.remove('nav-shadow')
        serach.classList.remove('contorn');
    }
}
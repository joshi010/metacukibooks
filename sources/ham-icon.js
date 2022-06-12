let ham = document.querySelector('.ham');
const navOptions = document.querySelector('.nav-options')

ham.onclick = () => {
    navOptions.classList.toggle('show');
}
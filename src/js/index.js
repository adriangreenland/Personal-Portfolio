import '../scss/main.scss'

window.onload = function() {
    document.querySelector('.menu-icon').onclick = function() {
        document.body.classList.toggle('menu-active');
    }
}
     

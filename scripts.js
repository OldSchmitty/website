const hamburgerIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('nav');


hamburgerIcon.addEventListener('click', ()=> {
    navBar.classList.toggle('change');
});
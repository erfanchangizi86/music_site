const iconid = document.querySelector('#iconsearch');
const idsearch = document.querySelector('#idsearch');
const iconmenu = document.querySelector('#iconmenu');
const navbar = document.querySelector('#navbar-search');


iconmenu.addEventListener('click', () => {
    navbar.classList.toggle('hidden');
})
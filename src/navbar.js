// button mobile elemen
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

//  event listener tombol menu
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

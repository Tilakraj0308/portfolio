const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavbar = document.getElementById('mobile-navbar-wrapper');

let isOpen = false;

menu.addEventListener('click', (e) => {
  if (isOpen) {
    menuIcon.src = 'img/icons/menu-icon.svg';
    mobileNavbar.style.display = 'none';
  } else {
    menuIcon.src = 'img/icons/x-icon.svg';
    mobileNavbar.style.display = 'block';
  }
  isOpen = !isOpen;
});

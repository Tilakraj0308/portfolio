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

// https://assets2.lottiefiles.com/packages/lf20_138qcknv.json Manger yellow
// https://assets7.lottiefiles.com/packages/lf20_ocrcnofw.json Loki
// https://assets8.lottiefiles.com/packages/lf20_1KjmRZ.json Developer

const menu = document.getElementById('menu');
const menuIcon = document.getElementById('menu-icon');
const mobileNavbar = document.getElementById('mobile-navbar-wrapper');

let isOpen = false;

menu.addEventListener('click', function () {
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

// Testimonials

const prevBtn = document.getElementById('btn-previous');
const nextBtn = document.getElementById('btn-next');
const testimonialText = document.getElementById('testimonial-text');

prevBtn.addEventListener('click', function () {
  changeSlide('PREV');
});

nextBtn.addEventListener('click', function () {
  changeSlide('NEXT');
});

let current = 0;

const testimonials = [
  {
    id: 1,
    text: "We had an incredible experience working with Landify and were. Splitbee is a game changer. How did I not know about it earlier. It's actually the first web analytics that works the way I like.",
    name: 'David Watson',
    img: 'david.png',
    designation: 'CEO',
    color: '',
  },
  {
    id: 2,
    text: "Splitbee is a game changer. How did I not know about it earlier. It's actually the first web analytics that works the way I like.",
    name: 'User 3',
    img: 'david.png',
    designation: 'CTO',
    color: '',
  },
  {
    id: 3,
    text: "I really like Splitbee. UI is incredibly smooth, installation is easy... So far, the best analytics tool I've tried!    ",
    name: 'User 4',
    img: 'david.png',
    designation: 'CFO',
    color: '',
  },
];

function changeSlide(dir) {
  if (dir === 'NEXT') {
    current += 1;
  } else {
    current -= 1;
  }

  if (current == testimonials.length) {
    current = 0;
  }
  if (current == -1) {
    current = testimonials.length - 1;
  }

  console.log(current);
  testimonialText.innerText = testimonials[current].text
}

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
const username = document.getElementById('name');
const designation = document.getElementById('designation');
const avatar = document.getElementById('avatar');

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
    text: 'We had an incredible experience working with Saheb and were impressed he made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements he made and his ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.',
    name: 'Prakriti Sen',
    img: 'prakriti.jpg',
    designation: 'Product Engineer',
  },
  {
    id: 2,
    text: 'On a second troubleshooting task on an existing site (MERN stack) Saheb once again exceeded expectations, demonstrating high standards of integrity and professionalism. Communications were excellent and the work was done well, on time and with sincere attention to our needs and priorities. I have no hesitation recommending him highly.',
    name: 'David Watson',
    img: 'david.jpeg',
    designation: 'CTO',
  },
  {
    id: 3,
    text: 'I had something complicated and lot of the folks denied or rejected to work with me for it being complicated. Saheb helped me fix it in just a couple of hours. Thanks for the help. would love to work with you again.',
    name: 'Pratik Mishra',
    img: 'pratik.jpg',
    designation: 'Entrepreneur',
  },
  {
    id: 4,
    text: 'I would really like to thank Saheb on how competent and assertive he was with the job. First off, his communication was commendable then secondly his skills are top notch. Mind you, he delivered the project days before the delivery date and this is not just any mere project. I will highly recommend him over and over again.',
    name: 'Rishabh Dubey',
    img: 'rishabh.jpg',
    designation: 'Client',
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

  const { img, text, name, designation } = testimonials[current];

  testimonialText.innerText = text;
  username.innerText = name;
  designation.innerText = designation;
  avatar.src = `img/avatars/${img}`;
  avatar.alt = name;
}

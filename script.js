const navBar = document.getElementById('navBar');

const scrollPostion = () => {
  window.onscroll = () => {
    if (window.scrollY > 80) {
      navBar.classList.add('scroll');
    } else {
      navBar.classList.remove('scroll');
    }
  };
};

const menubar = document.querySelector('.menuBtn');
let burger = document.getElementById('BURGER-MENU');
let lineTwo = document.getElementById('Line_2');
let lineThree = document.getElementById('Line_3');
const styling = 'transform: translate(0px, 27.267px)';

menubar.addEventListener('click', () => {
  console.log('Klick');
});

// let margin = 0;
// const arrow = document.querySelector('.navArrow');
// const products = document.querySelector('.productsWrapper');

// arrow.addEventListener('click', () => {
//   console.log('klick');
//   margin -= 250;

//   if (margin > -501) {
//     products.style.marginLeft = margin + 'px';
//     if (margin <= -500) {
//       arrow.style.display = 'none';
//     }
//   }
// });

scrollPostion();

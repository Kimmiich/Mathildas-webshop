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

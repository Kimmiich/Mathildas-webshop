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

scrollPostion();

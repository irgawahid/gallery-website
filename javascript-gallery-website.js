
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('active');
  });
  



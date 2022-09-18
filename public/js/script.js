// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#to-top');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('flex');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('flex');
    toTop.classList.add('hidden');
  }
};

// Garis pada Navbar
const garis = document.querySelector('#garis');
const navMenu = document.querySelector('#nav-menu');
garis.addEventListener('click', () => {
  garis.classList.toggle('garis-aktif');
  navMenu.classList.toggle('hidden');
});

// Klik di luar garis
window.addEventListener('click', (e) => {
  if (e.target != garis && e.target != navMenu) {
    garis.classList.remove('garis-aktif');
    navMenu.classList.add('hidden');
  }
});

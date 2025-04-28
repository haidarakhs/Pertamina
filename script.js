window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
      navbar.classList.remove('transparent');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    }
  });

  // Buat transparan dari awal saat halaman dimuat
  window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('transparent');
  });

  // toggle
  
  const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

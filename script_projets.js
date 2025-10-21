// Animation des cartes projets au scroll
const projetCards = document.querySelectorAll('.projet-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

projetCards.forEach(card => observer.observe(card));

// Navbar reste fixe et ne recouvre pas le footer
(function() {
  const nav = document.querySelector('.bottom-nav');
  const footer = document.querySelector('footer');
  const offset = 20; // distance entre nav et footer en px

  function updateNav() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
      nav.style.bottom = (75 + offset) + 'px';
    } else {
      nav.style.bottom = offset + 'px';
    }
  }

  nav.style.transition = 'bottom 0.7s ease';
  window.addEventListener('scroll', updateNav);
  window.addEventListener('resize', updateNav);
  window.addEventListener('load', updateNav);
})();

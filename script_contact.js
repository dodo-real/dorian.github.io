// Animation scroll pour contact
const contactElements = document.querySelectorAll('.contact-info, .contact-form-container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

contactElements.forEach(el => observer.observe(el));

// Navbar fixe mais ne recouvre pas le footer
(function () {
  const nav = document.querySelector('.bottom-nav');
  const footer = document.querySelector('footer');
  const offset = 20; // distance entre nav et footer

  function updateNav() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop < windowHeight) {
      nav.style.bottom = (25 + offset) + 'px';
    } else {
      nav.style.bottom = offset + 'px';
    }
  }

  window.addEventListener('scroll', updateNav);
  window.addEventListener('resize', updateNav);
  window.addEventListener('load', updateNav);
})();

// Affichage d'un message de succès sans reload (Formspree envoie quand même)
document.getElementById('contact-form').addEventListener('submit', function(e){
  const status = document.getElementById('form-status');
  status.textContent = "Message en cours d'envoi...";
  status.style.opacity = 1;
});

// Réinitialiser les champs si l'utilisateur quitte ou recharge la page
window.addEventListener('beforeunload', function() {
  const form = document.getElementById('contact-form');
  if (form) {
    form.reset();
  }
});


// Animation au scroll des cartes
const cards = document.querySelectorAll('.competence-card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
cards.forEach(card => observer.observe(card));

// Animation des titres
const titles = document.querySelectorAll('.competence-category h2');
const titleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      titleObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
titles.forEach(t => titleObserver.observe(t));


//Fonction pour la navbar (évite qu'elle recouvre le footer)
(function() {
  const nav = document.querySelector('.bottom-nav');
  const footer = document.querySelector('footer');
  const offset = 20; // distance entre nav et footer en px

  function updateNav() {
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (footerTop + 70 < windowHeight) {
      // Footer visible → on ajuste bottom pour ne pas recouvrir
      
      nav.style.bottom = (95 + offset) + 'px';
    } else {
      // Footer pas encore visible → nav reste en bas
      nav.style.bottom = (offset) + 'px';
    }
  }

  nav.style.transition = 'bottom 0.7s ease';
  window.addEventListener('scroll', updateNav);
  window.addEventListener('resize', updateNav);
  window.addEventListener('load', updateNav);
})();
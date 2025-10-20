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

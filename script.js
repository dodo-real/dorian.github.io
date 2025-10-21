/* fichier: script.js (refait intégralement) */

// Typing animation avec effet reverse
const typingElement = document.querySelector('.typing');
const text = typingElement.dataset.text;
let index = 0;
let forward = true;

function typeStatus() {
  if (forward) {
    typingElement.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
      forward = false;
      setTimeout(typeStatus, 150);
      return;
    }
  } else {
    index--;
    if (index > 0) {
      typingElement.textContent = text.slice(0, index);
    } else {
      typingElement.textContent = "";
      forward = true;
      setTimeout(typeStatus, 400);
      return;
    }
  }
  setTimeout(typeStatus, 100);
}
typeStatus();

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
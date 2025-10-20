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


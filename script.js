const roles = [
  "Junior Software Engineer",
  "Python Developer",
  "Machine Learning Enthusiast",
  "Backend Developer"
];

let roleIndex = 0;
let charIndex = 0;

const titleElement = document.querySelector("h2");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    titleElement.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    titleElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    roleIndex++;
    if (roleIndex >= roles.length) {
      roleIndex = 0;
    }
    setTimeout(typeEffect, 300);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  titleElement.textContent = "";
  typeEffect();
});
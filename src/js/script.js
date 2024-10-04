const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

// Événement pour le bouton <Next>
next.addEventListener("click", () => {
  currentActive++; // Avance à l'étape suivante
  if (currentActive > steps.length) currentActive = steps.length; // Stop quand arrivé a la fin
  update();
});

// Événement pour le bouton <Prev>
prev.addEventListener("click", () => {
  currentActive--; // Revient à l'étape précédente
  if (currentActive < 1) currentActive = 1; // Stop quand retourné au début
  update();
});

function update() {
  // Active ou désactive les étapes
  steps.forEach((step, idx) => {
    step.classList.toggle("active", idx < currentActive);
  });

  // Met à jour la largeur de la barre de progression
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";

  // Gère l'état des boutons
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;
}

/* Script.js */

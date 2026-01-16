const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(isOpen));
});

// Ferme le menu quand on clique un lien (mobile)
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  });
});

// Fake submit (front only)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  hint.textContent = "✅ Message prêt. Pour l’envoyer vraiment, ajoute un back-end (Formspree, Netlify Forms, etc.).";
  form.reset();
});

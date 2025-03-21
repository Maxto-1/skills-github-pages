// Sélectionne tous les éléments à animer
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Fonction pour ajouter la classe d'animation
const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observer après l'animation
        }
    });
};

// Crée un observer
const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.2 // Déclenche à 20% de visibilité
});

// Observe chaque élément
animatedElements.forEach(element => observer.observe(element));

// Validation du formulaire de contact
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        const nom = document.getElementById("nom").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!nom || !email || !message) {
            alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
            event.preventDefault(); // Empêche l'envoi du formulaire
        } else if (!validateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            event.preventDefault();
        }
    });

    // Fonction pour valider l'email
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Effet de survol sur les projets
    const projets = document.querySelectorAll(".projet");
    projets.forEach((projet) => {
        projet.addEventListener("mouseover", function () {
            projet.style.transform = "scale(1.05)";
            projet.style.transition = "transform 0.3s ease";
            projet.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
        });

        projet.addEventListener("mouseout", function () {
            projet.style.transform = "scale(1)";
            projet.style.boxShadow = "none";
        });
    });

    // Texte animé dans le header avec effet de luminosité
    const dynamicText = document.querySelector(".dynamic-text");
    const words = ["compétences", "projets", "centres d'intérêt", "activités sportives"];
    let wordIndex = 0;

    function changeWord() {
        dynamicText.textContent = words[wordIndex];
        wordIndex = (wordIndex + 1) % words.length; // Boucle sur les mots

        // Ajoute un effet de luminosité temporaire
        dynamicText.style.transition = "all 0.5s ease";
        dynamicText.style.filter = "brightness(1.5)"; // Augmente la luminosité
        dynamicText.style.textShadow = "0 0 10px rgba(255, 255, 255, 0.8)"; // Ajoute un effet lumineux

        // Réinitialise l'effet après un court délai
        setTimeout(() => {
            dynamicText.style.filter = "brightness(1)";
            dynamicText.style.textShadow = "none";
        }, 500); // Réinitialise après 500ms
    }

    // Change le mot toutes les 4 secondes
    setInterval(changeWord, 4000);

    // Initialisation
    changeWord();

    // Effet interactif sur les liens de navigation
    const navLinks = document.querySelectorAll(".nav-links li a");

    navLinks.forEach((link) => {
        // Ajoute un effet au survol
        link.addEventListener("mouseover", function () {
            link.style.color = "#4CAF50"; // Change la couleur du texte
            link.style.transform = "scale(1.1)"; // Agrandit légèrement le lien
            link.style.transition = "all 0.3s ease"; // Animation fluide
        });

        // Réinitialise l'effet lorsque la souris quitte le lien
        link.addEventListener("mouseout", function () {
            link.style.color = ""; // Réinitialise la couleur
            link.style.transform = "scale(1)"; // Réinitialise la taille
        });
    });
});
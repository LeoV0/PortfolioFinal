document.getElementById('lienBouton').addEventListener('click', function() {
    var bouton = document.getElementById('lienBouton');
    var accueil = document.querySelector('.accueil');
    var listCard = document.querySelector('.list-card');

    if (bouton.textContent === "Commencer") {
        accueil.style.backgroundImage = "url(images/2206_w026_n002_2115b_p1_2115.jpg)";
        bouton.textContent = "Arreter";
        bouton.classList.add("arreter");
        bouton.classList.remove("commencer");
        listCard.classList.add("invisible");
    } else {
        accueil.style.backgroundImage = "url(images/2306.w026.n002.3461B.p1.3461.jpg)";
        bouton.textContent = "Commencer";
        bouton.classList.remove("arreter");
        bouton.classList.add("commencer");
        listCard.classList.remove("invisible");
    }
});

// Sélectionnez tous les liens "En savoir plus"
const enSavoirPlusLinks = document.querySelectorAll('.savoir a');

// Sélectionnez toutes les divs d'information
const informations = document.querySelectorAll('.information');

// Ajoutez un gestionnaire d'événements à chaque lien "En savoir plus"
enSavoirPlusLinks.forEach((link, index) => {
    link.addEventListener('click', function(event) {
        // Empêcher le comportement par défaut du lien
        event.preventDefault();
        
        // Masquez toutes les divs d'information
        informations.forEach(info => {
            info.classList.add('invisible');
        });
        
        // Affichez la div d'information correspondant à l'index du bouton
        informations[index].classList.remove('invisible');
    });
});

// Sélectionnez tous les SVG de fermeture
const closeIcons = document.querySelectorAll('.closeIcon');

// Ajoutez un gestionnaire d'événements à chaque SVG de fermeture
closeIcons.forEach((closeIcon, index) => {
    closeIcon.addEventListener('click', function(event) {
        // Empêcher la propagation de l'événement pour éviter que la div ne se ferme à cause du clic sur le SVG
        event.stopPropagation();
        
        // Masquer la div d'information correspondante en ajoutant la classe 'invisible'
        informations[index].classList.add('invisible');
    });
});


function generateRandomTitle() {
    let randomTitle = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 20; i++) {
        randomTitle += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('randomTitle').innerText = randomTitle;
}

// Appel de la fonction pour générer le titre aléatoire au chargement de la page
window.onload = generateRandomTitle;
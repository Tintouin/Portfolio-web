const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
const categoryTitle = document.getElementById('category-title');
const categoryContent = document.getElementById('category-content');

sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const category = link.getAttribute('data-category');
        loadCategoryContent(category);
        // Ajouter le style souligné à la catégorie sélectionnée et le supprimer des autres
        sidebarLinks.forEach(link => {
            if (link.getAttribute('data-category') === category) {
                link.classList.add('selected');
            } else {
                link.classList.remove('selected');
            }
        });
    });
});

function loadCategoryContent(category) {
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1); // Met en majuscule la première lettre de la catégorie

    // Charger le contenu depuis un fichier HTML externe
    fetch(`${category}.html`)
        .then(response => response.text())
        .then(data => {
            categoryContent.innerHTML = data;
        })
        .catch(error => console.error('Erreur lors du chargement du contenu:', error));
}


window.addEventListener('scroll', (ev) => {
    const logo =  document.querySelector('.logo1');
    const scroll = document.scrollingElement.scrollTop;
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight * 0.8; // 80% de la hauteur de la fenêtre
    const minScale = 0.2; // Vous pouvez ajuster ce ratio selon vos besoins
    let scale = scroll / maxScroll < 1 ? 1 - (scroll / maxScroll) : 1;
    
    if (scroll > maxScroll || scale <= minScale) {
      scale = minScale;
    }
    
    //Changement de taille
    logo.setAttribute('style', `transform: scale(${scale});`);
    console.log(scale, scroll, maxScroll);

    // Changement de position
    const maxTranslateY = 15; // Maximum de décalage en Y
    const translateY = maxTranslateY * (1 - scale); // Calcul du décalage en Y en fonction de l'échelle
    
    logo.style.position = 'relative'; // Assurez-vous que la position est relative pour le déplacement
    logo.style.top = `${translateY}px`; // Définir le décalage en Y
    // Changement de position
    const maxTranslateX = -35; // Maximum de décalage en X
    const translateX = maxTranslateX * (1 - scale); // Calcul du décalage en Y en fonction de l'échelle
    
    logo.style.position = 'relative'; // Assurez-vous que la position est relative pour le déplacement
    logo.style.left = `${translateX}vw`; // Définir le décalage en X
  
});

window.addEventListener('scroll', (ev) => {
    const logo =  document.querySelector('.logo2');
    const scroll = document.scrollingElement.scrollTop;
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight * 0.8; // 80% de la hauteur de la fenêtre
    const minScale = 0.2; // Vous pouvez ajuster ce ratio selon vos besoins
    let scale = scroll / maxScroll < 1 ? 1 - (scroll / maxScroll) : 1;
    
    if (scroll > maxScroll || scale <= minScale) {
      scale = minScale;
    }
    
    //Changement de taille
    logo.setAttribute('style', `transform: scale(${scale});`);
    console.log(scale, scroll, maxScroll);

    // Changement de position
    const maxTranslateY = -25; // Maximum de décalage en Y
    const translateY = maxTranslateY * (1 - scale); // Calcul du décalage en Y en fonction de l'échelle
    
    logo.style.position = 'relative'; // Assurez-vous que la position est relative pour le déplacement
    logo.style.top = `${translateY}px`; // Définir le décalage en Y
    // Changement de position
    const maxTranslateX = -17; // Maximum de décalage en X
    const translateX = maxTranslateX * (1 - scale); // Calcul du décalage en Y en fonction de l'échelle
    
    logo.style.position = 'relative'; // Assurez-vous que la position est relative pour le déplacement
    logo.style.left = `${translateX}vw`; // Définir le décalage en X
  
});
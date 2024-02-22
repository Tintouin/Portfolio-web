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

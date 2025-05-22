seeAllProducts();

function seeAllProducts() {
  const seeAllBtn = document.getElementById("see-all-products-button");
  const catalogList = document.getElementById("articles-list");

  if (seeAllBtn && catalogList) {
    seeAllBtn.addEventListener("click", () => {
      console.log("Bouton 'Voir tous les produits' cliqué");
      catalogList.classList.remove("only-display-4-articles");
      seeAllBtn.style.display = "none"; // Masque le bouton une fois cliqué
    });
  }
};

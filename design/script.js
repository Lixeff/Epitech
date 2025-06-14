document.addEventListener("DOMContentLoaded", function () {
       // SLIDESHOW AUTOMATIQUE
       let slideIndex = 0;
       const slides = document.querySelectorAll(".slides");
   
       function showSlides() {
           for (let i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";
           }
   
           slideIndex++;
           if (slideIndex > slides.length) {
               slideIndex = 1;
           }
   
           slides[slideIndex - 1].style.display = "block";
           slides[slideIndex - 1].classList.add("fade");
   
           setTimeout(showSlides, 4300); // Change toutes les 4 secondes
       }
   
       showSlides(); // Lancer le diaporama dès le chargement de la page
   
       // CAROUSEL AU SURVOL
       document.querySelectorAll(".carousel").forEach(carousel => {
           const container = carousel.querySelector(".carousel-container");
           let scrollAmount = 0;
   
           carousel.addEventListener("mouseenter", () => {
               // Code pour le carousel (inchangé)
           });
       });
   });


// Changer l'image principale en cliquant sur une miniature
function changeImage(thumbnail) {
    const mainImage = document.getElementById("mainImage");
    mainImage.src = thumbnail.src;
}

// Afficher/Masquer les informations du projet
document.getElementById("projectName").addEventListener("click", function () {
    const projectInfo = document.getElementById("projectInfo");

    if (projectInfo.style.display === "none" || projectInfo.style.display === "") {
        // Afficher la description
        projectInfo.style.display = "block";
    } else {
        // Masquer la description
        projectInfo.style.display = "none";
    }
});

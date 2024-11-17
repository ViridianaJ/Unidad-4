document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const descriptionBox = document.getElementById("description");
    const buttons = document.querySelectorAll(".button");

    // Agregar eventos a cada botón
    buttons.forEach(button => {
        // Cambiar la imagen al pasar el ratón
        button.addEventListener("mouseover", () => {
            mainImage.src = button.dataset.image;
        });

        // Cambiar la imagen y mostrar descripción al hacer clic
        button.addEventListener("click", () => {
            mainImage.src = button.dataset.image;
            descriptionBox.value = button.dataset.description;
        });
    });
});

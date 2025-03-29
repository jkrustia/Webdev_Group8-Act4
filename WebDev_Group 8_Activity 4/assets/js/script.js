document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-gallery img");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showImage(index);
        });
    });

    showImage(0);
});

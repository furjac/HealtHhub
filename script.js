document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.product-card button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });

    // Example of a simple page slider (could be improved with libraries like Swiper.js)
    const ads = document.querySelectorAll('.ads img');
    let currentAd = 0;

    function showNextAd() {
        ads[currentAd].style.opacity = 0;
        currentAd = (currentAd + 1) % ads.length;
        ads[currentAd].style.opacity = 1;
    }

    setInterval(showNextAd, 3000); // Change ad every 3 seconds
});

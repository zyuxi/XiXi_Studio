const gallery = document.querySelector('.image-gallery');
const images = gallery.querySelectorAll('.gallery-image');

function getRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function fadeInImage(image, delay) {
    setTimeout(function() {
        image.style.opacity = 1;
    }, delay);
}

function fadeInImage() {
    let delay = 0;
    images.forEach(function(image) {
        let randomDelay = getRandomDelay(100, 1000);
        fadeInImage(image, delay + randomDelay);
        delay += randomDelay;
    });
}

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const galleryPosition = gallery.offsetTop - this.window.innerHeight;
    if (scrollPosition > galleryPosition) {
        fadeInImage();
    }
});
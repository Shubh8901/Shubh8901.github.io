let index = 0;
function moveSlide(step) {
    const timeline = document.querySelector(".timeline-container");
    const cardWidth = document.querySelector(".timeline-card").offsetWidth + 20;
    const totalCards = document.querySelectorAll(".timeline-card").length;
    
    index += step;
    if (index < 0) {
        index = totalCards - 1; // Loop back to the last slide
    } else if (index >= totalCards) {
        index = 0; // Loop back to the first slide
    }
    
    timeline.style.transform = `translateX(${-index * cardWidth}px)`;
}
function flipCard(card) {
    card.classList.toggle('flipped');
}
document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById('popup');
    const logo = document.getElementById('logo');
    const gifBox = document.getElementById('gifBox');
    const closePopup = document.getElementById('closePopup');
    const closeGif = document.getElementById('closeGif');

    setTimeout(() => {
        popup.classList.add('popup-hide');
        setTimeout(() => {
            popup.style.display = 'none';
            logo.style.display = 'block';
        }, 1000);
    }, 4000);

    closePopup.addEventListener('click', function() {
        popup.classList.add('popup-hide');
        setTimeout(() => {
            popup.style.display = 'none';
            logo.style.display = 'block';
        }, 500);
    });

    logo.addEventListener('click', function() {
        gifBox.style.display = 'block';
    });

    closeGif.addEventListener('click', function() {
        gifBox.style.display = 'none';
    });
});
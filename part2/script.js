let index = 0;
const slider = document.getElementById("slider");
const items = document.querySelectorAll(".wat");
const total = items.length;
let autoPlay = true;
let interval;

function updateSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-index * 320}px)`;
}

function nextSlide() {
    if (index >= total - 1) {
        index = 0;
    } else {
        index++;
    }
    updateSlide();
}

function prevSlide() {
    if (index <= 0) {
        index = total - 1;
    } else {
        index--;
    }
    updateSlide();
}

function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", startAutoSlide);

if (autoPlay) {
    startAutoSlide();
}

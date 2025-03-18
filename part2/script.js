let index = 0;
const slider = document.getElementById("slider");
const items = document.querySelectorAll(".wat");
const total = items.length;
let autoPlay = true;
let interval;

// ตั้งค่าให้การเลื่อนลื่นไหล
function updateSlide() {
    slider.style.transition = "transform 0.5s ease-in-out";
    slider.style.transform = `translateX(${-index * 320}px)`;
}

// ฟังก์ชันเลื่อนขวา
function nextSlide() {
    if (index >= total - 1) {
        index = 0;
    } else {
        index++;
    }
    updateSlide();
}

// ฟังก์ชันเลื่อนซ้าย
function prevSlide() {
    if (index <= 0) {
        index = total - 1;
    } else {
        index--;
    }
    updateSlide();
}

// Auto Slide
function startAutoSlide() {
    interval = setInterval(nextSlide, 3000);
}

// หยุด Auto Slide เมื่อ hover
slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", startAutoSlide);

if (autoPlay) {
    startAutoSlide();
}

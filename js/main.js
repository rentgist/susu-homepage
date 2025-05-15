let currentSlide = 0;
let slideInterval;  // 자동 슬라이드 타이머 ID

function showSlide(index) {
    const slides = document.querySelectorAll(".slides img");
    const container = document.querySelector(".slides");
    if (!slides.length || !container) return;

    // 인덱스 순환
    currentSlide = (index + slides.length) % slides.length;
    // 컨테이너 좌우 이동
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// 자동 슬라이드 시작 (5초마다 다음)
function startAutoSlide() {
    slideInterval = setInterval(() => moveSlide(1), 5000);
}

// 자동 슬라이드 멈춤
function stopAutoSlide() {
    clearInterval(slideInterval);
}

document.addEventListener("DOMContentLoaded", () => {
    // 첫 슬라이드 표시
    showSlide(currentSlide);
    // 자동 슬라이드 시작
    startAutoSlide();

    // 마우스 올리면 자동 슬라이드 멈추고, 떼면 다시 시작
    const sliderEl = document.querySelector(".slider");
    sliderEl.addEventListener("mouseenter", stopAutoSlide);
    sliderEl.addEventListener("mouseleave", startAutoSlide);
});

function showCalendar() {
    const calendar = document.getElementById('calendar-section');
    if (calendar.style.display === 'none') {
        calendar.style.display = 'block';
        window.scrollTo({
            top: calendar.offsetTop,
            behavior: 'smooth'
        });
    }
}

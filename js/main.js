let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slides img");
    if (!slides.length) return;

    slides.forEach(slide => slide.classList.remove("active"));

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add("active");
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

// 초기 상태에서 첫 슬라이드 보여주기
document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
});

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slides img");
    const container = document.querySelector(".slides");
    if (!slides.length || !container) return;

    // 1) 인덱스 순환
    currentSlide = (index + slides.length) % slides.length;

    // 2) 컨테이너 이동
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentSlide);
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

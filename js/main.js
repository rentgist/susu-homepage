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

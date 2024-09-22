document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;

    function showSlide(index) {
        const width = images[0].clientWidth;
        slides.style.transform = `translateX(${-width * index}px)`;
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    }

    // nextButton.addEventListener('click', nextSlide);
    // prevButton.addEventListener('click', prevSlide);

    // Автоматичне перелистування кожні 3 секунди
    setInterval(nextSlide, 3000);
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides-2');
    const images = document.querySelectorAll('.slide-2');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let index = 0;

    function showSlide(index) {
        const width = images[0].clientWidth;
        slides.style.transform = `translateX(${-width * index}px)`;
    }

    function nextSlide() {
        index = (index + 1) % images.length;
        showSlide(index);
    }

    function prevSlide() {
        index = (index - 1 + images.length) % images.length;
        showSlide(index);
    }
    setInterval(nextSlide, 3000);
});


// Функція для прокрутки до секції
function scrollToSection() {
    const section = document.getElementById("tiles-section");

    // Прокручуємо до секції тільки, якщо вона не в видимій частині екрану
    section.scrollIntoView({ behavior: 'smooth' });

    // Додаємо затримку для плавного з'явлення елементів після прокрутки
    setTimeout(() => {
        section.classList.add("visible");
    }, 500); // Затримка в 500 мс
}

// Допоміжна функція для перевірки, чи елемент в видимій частині екрану
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return (
        rect.top <= windowHeight && rect.bottom >= 0 &&
        rect.left <= windowWidth && rect.right >= 0
    );
}

// Функція для показу секції, коли вона з'являється у видимій частині
function showOnScroll() {
    const targetSection = document.getElementById("tiles-section");

    if (isInViewport(targetSection)) {
        targetSection.classList.add("visible");
    }
}

// Додаємо слухача прокрутки тільки після завантаження DOM
document.addEventListener('DOMContentLoaded', function () {
    // Слухач події прокручування
    window.addEventListener('scroll', showOnScroll);

    // Перевіряємо стан відразу після завантаження сторінки
    showOnScroll();

    // Забезпечуємо, що сторінка не прокручується вниз при завантаженні
    window.scrollTo(0, 0);
});

window.onload = function () {
    // Прокручуємо на початок після повного завантаження
    window.scrollTo(0, 0);
};

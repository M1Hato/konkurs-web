console.log("JavaScript is connected and working!"); //перевірка

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

        nextButton.addEventListener('click', () => {
            index = (index + 1) % images.length;
            showSlide(index);
        });

        prevButton.addEventListener('click', () => {
            index = (index - 1 + images.length) % images.length;
            showSlide(index);
        });
});


document.addEventListener('DOMContentLoaded', function() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackTextarea = document.getElementById('feedback');

    feedbackForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Забороняємо браузеру відправляти форму

        const toast = document.getElementById('toast');

        // Валідація поля для фідбеку
        if (feedbackTextarea.value.trim() === '') {
            feedbackTextarea.classList.add('error'); // Додаємо клас для виділення поля червоним
            showToast('Поле не може бути порожнім!');
            return;
        }

        // Якщо поле не порожнє, видаляємо клас помилки
        feedbackTextarea.classList.remove('error');

        // Показуємо toast повідомлення про успішне надсилання
        showToast('Повідомлення надіслано успішно!');
        
        // Очищаємо поле для фідбеку
        feedbackTextarea.value = '';
    });

    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000); // Час, після якого toast зникне (у мілісекундах)
    }
});

// document.addEventListener('DOMContentLoaded', function() {
//     const themeToggle = document.getElementById('themeToggle');
//     themeToggle.addEventListener('click', function() {
//         document.body.classList.toggle('dark-theme');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    // Перевіряємо, чи є збережена тема, і застосовуємо її
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        let theme = 'light-theme';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark-theme';
        }
        
        // Зберігаємо вибрану тему в localStorage
        localStorage.setItem('theme', theme);
    });
});









// Функция отображения деталей
function showDetails() {
    document.getElementById('modal').style.display = 'block';
}

// Функция закрытия модального окна
function hideModal() {
    document.getElementById('modal').style.display = 'none';
}

// Эффект плавного появления элементов
document.addEventListener("DOMContentLoaded", function () {
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    elementsToFadeIn.forEach(element => element.classList.add('fade-in'));
});
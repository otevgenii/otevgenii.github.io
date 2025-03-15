document.getElementById('prayer-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const request = document.getElementById('request').value.trim();

    if (!name || !request) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    // Здесь можно добавить отправку данных на сервер через AJAX или fetch
    alert('Ваш запрос успешно отправлен!');

    // Очистка формы после отправки
    document.getElementById('prayer-form').reset();
});
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var category = document.getElementById('category').value;
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var errorBox = document.getElementById('form-error');

    if (name === '' || email === '' || category === '' || subject === '' || message === '') {
        errorBox.textContent = 'Wszystkie pola są wymagane.';
        return;
    }
    var emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
        errorBox.textContent = 'Wpisz poprawny adres e-mail.';
        return;
    }
    if (subject.length > 40) {
        errorBox.textContent = 'Temat nie może mieć więcej niż 40 znaków.';
        return;
    }
    errorBox.textContent = '';
    alert('Dziękujemy za kontakt z redakcją!');
    this.reset();
});
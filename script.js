
document.getElementById('registrationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem!';
        return;
    }

    if (email && password && confirmPassword) {
        alert('Registro realizado com sucesso!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginErrorMessage = document.getElementById('loginErrorMessage');

    if (email && password) {
        alert('Login realizado com sucesso!');
        loginErrorMessage.textContent = '';
    } else {
        loginErrorMessage.textContent = 'Por favor, preencha todos os campos.';
    }
});

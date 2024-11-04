function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const strengthMessage = document.getElementById('passwordStrength');
    
    let strength = 'Débil';

    if (password.length >= 12) {
        strength = 'Moderada';
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password)) {
            strength = 'Fuerte';
        }
    }

    strengthMessage.textContent = `Fortaleza de la contraseña: ${strength}`;
}

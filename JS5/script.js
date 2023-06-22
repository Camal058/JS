class RegistrationForm {
    constructor() {
        this.username = '';
        this.password = '';
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    saveData() {
        const data = {
            username: this.username,
            password: this.password
        };

        const jsonData = JSON.stringify(data);

        const link = document.createElement('a');
        link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(jsonData);
        link.download = 'registration_data.json';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}
class LoginForm {
    constructor() {
        this.username = '';
        this.password = '';
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    submitForm() {
        console.log(`Submitted login form with username: ${this.username} and password: ${this.password}`);
    }
}

const registrationForm = new RegistrationForm();
const loginForm = new LoginForm();

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const username = document.getElementById('registration-username').value;
    const password = document.getElementById('registration-password').value;


    registrationForm.setUsername(username);
    registrationForm.setPassword(password);

    registrationForm.saveData();

    document.getElementById('registration-username').value = '';
    document.getElementById('registration-password').value = '';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    loginForm.setUsername(username);
    loginForm.setPassword(password);

    loginForm.submitForm();

    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});
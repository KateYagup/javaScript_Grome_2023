export const finishForm = () => {
    const form = document.querySelector('.login-form');
    const firstInput = document.querySelector('input');
    const login = document.createElement('input');
    login.setAttribute('name', 'login');
    firstInput.setAttribute('type', 'password');
    form.prepend(login);
}

// finishForm();
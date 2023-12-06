document.addEventListener('DOMContentLoaded', function () {
    const loginContainer = document.getElementById('login-container');
    const userInfoContainer = document.getElementById('user-info-container');
    const userInfoElement = document.getElementById('user-info');
    const changeUserBtn = document.getElementById('change-user-btn');
    const loginForm = document.getElementById('login-form');


    chrome.storage.local.get(['username', 'password'], function (result) {
        if (result.username && result.password) {
            loginContainer.style.display = 'none';

            userInfoElement.textContent = `Utilisateur connecté : ${result.username}`;
            userInfoContainer.style.display = 'block';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        chrome.storage.local.set({ 'username': username, 'password': password }, function () {
            console.log('Données du formulaire stockées avec succès.');
            loginContainer.style.display = 'none';
            userInfoContainer.style.display = 'block';
        });
    });

    changeUserBtn.addEventListener('click', function () {
        chrome.storage.local.remove(['username', 'password'], function () {
            console.log('Données du formulaire effacées avec succès.');
            userInfoContainer.style.display = 'none';
            loginContainer.style.display = 'block';
        });
    });
});
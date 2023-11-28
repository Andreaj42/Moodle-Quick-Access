chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'performFunction') {
    moodleInjection();
  }
});


function moodleInjection() {
  console.log("Lancement de l'injection");
  var loginTokenInput = document.querySelector("input[name=logintoken]");
  var token = loginTokenInput ? loginTokenInput.value : null;

  if (token) {
    chrome.storage.local.get(['username', 'password'], function (result) {
      console.log('Données :', result);

      var username = result.username;
      var password = result.password;

      var usernameField = document.querySelector('#username');
      var passwordField = document.querySelector('#password');

      if (usernameField && passwordField) {
        usernameField.value = username;
        passwordField.value = password;
        var loginForm = document.querySelector('form[id="login"]');
        if (loginForm) {
          loginForm.submit();
        }
      }
    });
  }
}

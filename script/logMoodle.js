document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("moodleButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0]?.id;
      if (tabId) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: moodleInjection,
        });
      }
    });
  });
});

function moodleInjection() {
  var loginTokenInput = document.querySelector("input[name=logintoken]");
  var token = loginTokenInput ? loginTokenInput.value : null;

  if (token) {
    var username = 'joly.andrea';
    var password = '45889651';

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
  }
}
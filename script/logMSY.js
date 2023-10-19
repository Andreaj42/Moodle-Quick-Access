document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("msyButton").addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      const tabId = tabs[0]?.id;
      if (tabId) {
        chrome.scripting.executeScript({
          target: { tabId: tabId },
          function: msyInjection,
        });
      }
    });
  });
});

function msyInjection() {
  var loginTokenInput = document.querySelector("input");
  var username = 'E027269';
  var password = 'TélécomSaint-Etienne0903µµ$$';

  var usernameField = document.querySelector('#Uid');
  var passwordField = document.querySelector('#Pwd');

  if (usernameField && passwordField) {
    usernameField.value = username;
    passwordField.value = password;

    var loginForm = document.querySelector('form[name="loginForm"]'); 
    if (loginForm) {
      loginForm.submit();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("refreshButton").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tabId = tabs[0]?.id;
        if (tabId) {
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            function: refreshPage,
          });
        }
      });
    });
  });
  
  function refreshPage() {
    location.reload();
  }
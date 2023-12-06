chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url === "https://mootse.telecom-st-etienne.fr/login/index.php") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            var currentTab = tabs[0];
            chrome.tabs.sendMessage(currentTab.id, { action: "executeMoodleScript" });
        });
    }
});

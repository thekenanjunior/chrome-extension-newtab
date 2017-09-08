chrome.browserAction.onClicked.addListener(function() {

    chrome.tabs.create({url: "http://www.kenanjunior.com/"});

});
function activate_tab(tab_index) {
    chrome.tabs.query({currentWindow: true, index: tab_index}, function(tabs) {
        if (tabs.length)
            chrome.tabs.update(tabs[0].id, {active: true});
    });
}

chrome.commands.onCommand.addListener(function(command){
    if (command == "previoustab") {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
            if (tabs.length) {
                var currentIndex = tabs[0].index;
                chrome.tabs.query({currentWindow: true}, function (tabs) {
                    var tab_index = currentIndex - 1;
                    if (tab_index < 0)
                        tab_index = tabs.length - 1;
                    activate_tab(tab_index);
                });
            }
        });
    }
    else if (command == "nexttab") {
        chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
            if (tabs.length) {
                var currentIndex = tabs[0].index;
                chrome.tabs.query({currentWindow: true}, function (tabs) {
                    var tab_index = (currentIndex + 1) % tabs.length;
                    activate_tab(tab_index);
                });
            }
        });
    }
});

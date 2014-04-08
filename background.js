chrome.commands.onCommand.addListener(function(command){
  if (command == "previoustab") {
    // Copied from StackOverflow posting here:
    // http://stackoverflow.com/questions/16276276/chrome-extension-select-next-tab
    // First, get currently active tab
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      if (tabs.length) {
        var activeTab = tabs[0],
        tabId = activeTab.id,
        currentIndex = activeTab.index;

        // Next, get number of tabs in the window, in order to allow cyclic previous
        chrome.tabs.query({currentWindow: true}, function (tabs) {
          var numTabs = tabs.length;

          // Finally, get the index of the tab to activate and activate it
          chrome.tabs.query({currentWindow: true, index: (currentIndex-1) % numTabs}, function(tabs){
            if (tabs.length) {
              var tabToActivate = tabs[0],
              tabToActivate_Id = tabToActivate.id;
              chrome.tabs.update(tabToActivate_Id, {active: true});
            }
          });
        });
      }
    });
  }

  if (command == "nexttab") {
    // Copied from StackOverflow posting here:
    // http://stackoverflow.com/questions/16276276/chrome-extension-select-next-tab
    // First, get currently active tab
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      if (tabs.length) {
        var activeTab = tabs[0],
        tabId = activeTab.id,
        currentIndex = activeTab.index;

        // Next, get number of tabs in the window, in order to allow cyclic next
        chrome.tabs.query({currentWindow: true}, function (tabs) {
          var numTabs = tabs.length;

          // Finally, get the index of the tab to activate and activate it
          chrome.tabs.query({currentWindow: true, index: (currentIndex+1) % numTabs}, function(tabs){
            if (tabs.length) {
              var tabToActivate = tabs[0],
              tabToActivate_Id = tabToActivate.id;
              chrome.tabs.update(tabToActivate_Id, {active: true});
            }
          });
        });
      }
    });
  }
});

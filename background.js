chrome.commands.onCommand.addListener(function(command){
  if (command == "test") {
    //chrome.tabs.query({currentWindow: true, active: true}, function(tab){chrome.tabs.update(tab[0].id, {"url": "http://www.redhat.com"});})
    //chrome.tabs.query({currentWindow: true, active: true}, function(tab){chrome.tabs.update(tab[0].id, {selected: False});});
    chrome.tabs.query({currentWindow: true, active: true}, function(tab){alert('Tab Id: ' + tab[0].id);});
    //chrome.tabs.create({"url": "http://www.gluster.org"});
  }
});

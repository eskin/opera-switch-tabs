chrome.commands.onCommand.addListener(function(command){
  if (command == "test") {
    chrome.tabs.query({currentWindow: true, active: true}, function(tab){chrome.tabs.update(tab[0].id, {"url": "http://www.redhat.com"});})
    //alert('Keyboard shortcut from extension worked!');
    //chrome.tabs.create({"url": "http://www.gluster.org"});
  }
});

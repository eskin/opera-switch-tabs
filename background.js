chrome.commands.onCommand.addListener(function(command){
	if (command == "test") {
		alert('Keyboard shortcut from extension worked!');
	}
});
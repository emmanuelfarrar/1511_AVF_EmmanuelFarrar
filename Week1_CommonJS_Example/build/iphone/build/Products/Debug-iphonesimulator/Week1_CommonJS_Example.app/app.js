//Common JS example

Ti.UI.setBackgroundColor("#fafafa");

var navWindow, mainWindow, introWindow;

//requiring modules
mainWindow = require('mainWindowView').mainWindow;
introWindow = require('introWindowView');

//define navigation window
navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//open navigation window
navWindow.open();

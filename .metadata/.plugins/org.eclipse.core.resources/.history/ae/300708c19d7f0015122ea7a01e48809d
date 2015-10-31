//Initialize Usage Window
exports.init = function(){
	var usageWindow, usageIntroLabel, usageExportsTitle, usageExportsCopy,
	usageRequireTitle, usageRequireCopy;
	
	//usage window
	usageWindow = Ti.UI.createWindow({
		title: "Usage",
		backgroundColor: "#fafafa",
		layout: "vertical"
		
	});
	
	//usage window intro copy
	usageIntroLabel = Ti.UI.createLabel({
		text: 'To use CommonJS modules you first\ncreate a new '
			+ 'JavaScript file within your project resources folder. '
			+ 'with a forward slash (/) or number. Module filenames should '
			+ 'also not include the words "require", "exports", or "module".',
		color: "#333",
		top: 16, left: 16
	});
	
	usageExportsTitle = Ti.UI.createLabel({
		text: 'Exports',
		font: {fontSize: "18dp", fontWeight: "bold"},
		color: "#333",
		top: 16, left: 16
	});
	
	usageExportsCopy = Ti.UI.createLabel({
		text: 'All modules contain a free "exports" variable. \nThe exports '
			+ 'variable is an object used to access specific ports within '
			+ 'the module.'
		
			+ '\n\nNote: The exports variable should only be used '
			+ 'for eporting within a CommonJS module.',
		color: "#333",
		top: 3, left: 16
	});
	
	usageRequireTitle = Ti.UI.createLabel({
		text: 'Require',
		font: {fontSize: "18dp", fontWeight: "bold"},
		color: "#333",
		top: 16, left: 16
	});
	
	usageRequireCopy = Ti.UI.createLAbel({
		text: 'To import a module into your applicatin use the require '
			+ 'function and pass the module filename, minus the .JS extension '
			+ ', as a string arguement. eg. require("myData") from myData.js.'
		
			+ '\n\nWhen the require function is assignment to a variable it '
			+ 'is re-assignment the value of the modules exports object. '
			+ 'For example if you require myData as var data = require("myData")'
			+ 'any properties assigned to the exports object in myData are '
			+ 'now accessisble via the data variable. eg. exports.data in '
			+ 'myData is now accessiable via the data.data property.',
		font: {fontSize: "16dp"},
		color: "#333",
		top: 3, left: 16
	});
	
	Ti.API.debug('Adding components to usageWindow');
	usageWindow.add(usageIntroLabel, usageExportsTitle, usageExportsCopy,
	usageRequireTitle, usageRequireCopy);
	
	Ti.API.debug('Opening usageWindow');
	navWindow.openWindow(usageWindow);
	
};

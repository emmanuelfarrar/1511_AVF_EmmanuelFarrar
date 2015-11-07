var buildUI = function(a, b){  //based on the position of the argeuments passed from geo, can be lat long
	console.log("vuildUI!");
	
	var win = Ti.UI.createWindow({
		backgroundColor: "#ccc",
		layout: "vertical"
	});
	
	var latitude = Ti.UI.createLabel({
		text: "Current Latitude: " + a,
		top: 30
	});
	var longitude = Ti.UI.createLabel({
		text: "Current Longitude: " + b,
		top: 15,
		color: "#000"
	});
	
	win.add(latitude);
	win.add(longitude);
	win.open();
};

exports.buildUI = buildUI;
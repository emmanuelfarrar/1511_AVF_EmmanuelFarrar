var buildUi = function (locInfo, wxDesc, curTemp, currentDay, dewpoint, precip, humid, windSp, windType, icon){
	
	var win = Titanium.UI.createWindow({  
    title:'Weather App',
    backgroundImage: 'images/bg_01.jpg',
    fullscreen: true
});

var upperView = Ti.UI.createView({
	top: 30,
	width: "95%",
	height: "40%"
});

var lowerView = Ti.UI.createView({
	top: 300,
	width: "95%",
	height: "30%"
});

var iconView = Ti.UI.createView({
	borderRadius: 10,
	width: 40,
	height: 40,
	bottom: 40, right: 30	
});

var cityLabel = Ti.UI.createLabel({
	text: locInfo,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "white",
	font: {fontSize: 24, fontFamily: "arial", fontWeight: "bold"},
	top: 10
});

var wxDescLabel = Ti.UI.createLabel({
	text: wxDesc,
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "white",
	font: {fontSize: 18, fontFamily: "arial", fontWeight: "bold"},
	top: 50
});

var curTempLabel = Ti.UI.createLabel({
	text: curTemp + "°",
	color: "white",
	font: {fontSize: 96, fontFamily: "arial", fontWeight: "bold"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	bottom: 0
});

var currentDayLabel = Ti.UI.createLabel({
	text: currentDay,
	color: "white",
	font: {fontSize: 18, fontFamily: "arial", fontWeight: "bold"},
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top: 20
});

var dewpointLabel = Ti.UI.createLabel({
	text: "Dewpoint: "+ dewpoint,
	color: "white",
	font: {fontSize: 16, fontFamily: "arial", fontWeight: "bold"},
	top:60, left: 10
});

var precipLabel = Ti.UI.createLabel({
	text: "Precip: " + precip,
	color: "white",
	font: {fontSize: 16, fontFamily: "arial", fontWeight: "bold"},
	top:80, left: 10
});

var humidLabel = Ti.UI.createLabel({
	text: "Humidity: " + humid,
	color: "white",
	font: {fontSize: 16, fontFamily: "arial", fontWeight: "bold"},
	top:100, left: 10
});

var windSpLabel = Ti.UI.createLabel({
	text: "Wind Speed: " + windSp + "mph",
	color: "white",
	font: {fontSize: 16, fontFamily: "arial", fontWeight: "bold"},
	top:120, left: 10
});

var windTypeLabel = Ti.UI.createLabel({
	text: "Wind Desc: " + windType,
	color: "white",
	font: {fontSize: 16, fontFamily: "arial", fontWeight: "bold"},
	top:140, left: 10
});


var iconwxu = Ti.UI.createImageView({
	image: icon,
});

upperView.add(cityLabel);
upperView.add(wxDescLabel);
upperView.add(curTempLabel);
lowerView.add(currentDayLabel);
lowerView.add(dewpointLabel);
lowerView.add(precipLabel);
lowerView.add(humidLabel);
lowerView.add(windSpLabel);
lowerView.add(windTypeLabel);
iconView.add(iconwxu);
win.add(upperView, lowerView, iconView);
win.open();

};

exports.buildUi = buildUi;
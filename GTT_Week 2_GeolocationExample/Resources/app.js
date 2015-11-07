//GTT Geolocation example


/*telling the story
 * app launches   --app.js
 * network check
 * if no network, alert
 * if yes network, get geo
 * grab geo coords in a custom object -- geo.js
 * pass custom object to the UI  -- ui.js
 */

/*
 * 1) set up var geo to represent all functions and data from geo.js
 * 
 */

if (Ti.Network.online){
	var geo = require("geo");
	geo.getGeo();    //variable.function_name(); -- fires the function off
	
}else{
	alert("No network available.");
};


/*
 * 1) set up function and export said function 
 * 
 */

var getGeo = function(){
	console.log("GetGeofunction!");
	if (Ti.Platform.osname ==="android"){
		Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords.";
		var lat = 37.78583526611328;
		var lng = -122.4064178466797;
		var ui = require("ui");
		ui.buildUI(lat, lng);  //function sending lat and lng
	}else{
	
	Ti.Geolocation.getCurrentPosition(function(e){
	
			console.log(e);
			//good idea to console.log to see whats available to the dev
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			var ui = require("ui");
			ui.buildUI(lat, lng);
			//function sending lat and lng
			//ui.buildUI();
			}); //getCurrentPosition closing

	}; //else closure
};  //getGeo closuer

exports.getGeo = getGeo;
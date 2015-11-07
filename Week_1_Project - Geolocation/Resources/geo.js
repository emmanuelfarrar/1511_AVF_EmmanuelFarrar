//Emmanuel Farrar
//AVF 1511
//Week 1 - Project "Weather App"
// File: geo.js

var getGeo = function(){
	console.log("Getgeo function activated!");
	if (Ti.Platform.osname ==="android"){
		Ti.Geolocation.purpose = "Your location is needed to gather lat/long coords.";
		var lat = 37.78583526611328;
		var lng = -122.4064178466797;
		
		var infoforNetwork = require("network");
		infoforNetwork.api(lat, lng);  //function sending lat and lng
	}else{
	
	Ti.Geolocation.getCurrentPosition(function(e){
	
			console.log(e);
			//good idea to console.log to see whats available to the dev
			var lat = e.coords.latitude;
			var lng = e.coords.longitude;
			
			var infoforNetwork = require("network");
			infoforNetwork.api(lat, lng);  //function sending lat and lng
			
			}); //getCurrentPosition closing
	} //else closure
	
};  //getGeo closure

exports.getGeo = getGeo;
var remoteResponse, remoteError, json, testTitle, testAuthor;
var url = "https://api.reddit.com/";

remoteResponse = function(){
	Ti.API.debug(this.responseText);
	json = 	JSON.parse(this.responseText);
	
	testTitle = json.data.children[0].data.title;
	testAuthor = json.data.children[0].data.author;
	
	Ti.API.debug(testTitle);
	Ti.API.debug(testAuthor);
};

remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
};

var xhr = Ti.Network.createHTTPClient({
	onload: remoteResponse,
	onerror: remoteError,
	timeout: 5000
});

xhr.open('GET', url);
xhr.send();
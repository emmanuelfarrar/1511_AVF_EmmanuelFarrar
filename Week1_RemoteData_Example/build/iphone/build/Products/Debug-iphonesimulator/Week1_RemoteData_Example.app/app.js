Titanium.UI.setBackgroundColor('#000');

var win1, table1, remote;

//Import Remote Data Module
remote = require("remotedata");

table1 = Ti.UI.createTableView();

win1 = Ti.UI.createWindow({
	title: "Tab 1",
	backgroundColor: "#fff"
});

win1.add(table1);

win1.open();

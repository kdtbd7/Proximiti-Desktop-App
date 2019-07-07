/*
* Main page
*/

const bodyParser = require('body-parser');
const { app, BrowserWindow } = require('electron');
const express = require('express');
const path = require('path');

const expressApp = express();

app.on('ready', function () {
	//express();
	window = new BrowserWindow({
		width: 1100,
		height: 700,
		resizeable: false,
		frame: false

	})
	window.setResizable(false);
	window.loadURL('http://localhost:80/');
	window.focus();
});

expressApp.use(express.static(path.join(__dirname)));
expressApp.use(bodyParser.urlencoded({ extended: true })); 

expressApp.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/html/main.html'));
});

expressApp.listen(80, () => {
    console.log("Proximiti starting on server port 80.");
    console.log("Web page is up");
})
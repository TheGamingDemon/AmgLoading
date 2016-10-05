/*
                               _                     _ 
        _       ____  _       | |                   | |
   ____|_|_   _|| _ || | ____ | |     ___   __ _  __| |
  / ___| | \_/ ||___|| |/  _ \| |    / _ \ / _` |/ _` |
  \___ \ ||\_/ ||    | |   __/| |___| (_) | (_| | (_| |
  |____/_||  |_||    |_|\____|\______\___/ \__,_|\__,_|
	version 1.00 by Lachlan (http://steamcommunity.com/id/UnresolvedVice)
*/


// Define your own server name
var useServerName = false;
// The server name, of course
var serverName = "Amethyst Gaming";

/* Adds a rather small custom server image..
the image will be forced down to 50x50, placing it at the top right
*/
var useServerImage = false;
// The server image path
var serverImage = "images/server-logo.png";

// Use a custom background image
var useBackgroundImage = true;
// Single background images
var backgroundImage = "backgrounds/background.jpg";

// Fade the subtitle in/out
var fade = true;

// Scrolling news updates that snap back
var useUpdates = true;
// News updates
var newsUpdates = [
	"Welcome to Amethyst Gaming",
	"Read the !motd for the server rules",
	"Have fun",
];

// Music or nah?
var useMusic = false;
// Music playlist
var musicPlaylist = [
	"music/1.ogg",
];
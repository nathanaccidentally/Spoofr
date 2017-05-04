console.log("Welcome to Secure Spoofr. Secure Spoof uses all methods possible to spoof traffic and key clicks to make you a little more safe. It will also force all insecure connecections to use HTTPS://.");

url = window.location.href;
secure = url.replace("http://", "https://");

if (url.includes("http://")) {
	console.log("Trying to force HTTPS://");
	window.location.replace(secure);
} else {
	console.log("URL is already served over HTTPS.");
}

// Above is the basic code for forcing HTTPS, now we can spoof keyclicks to keep those secure.

document.addEventListener("keydown", logPress, false);

function logPress() {
	console.log("System received spoofed keypress");
}

// Now I need to set an array of key click params so we can spoof it.
var keyCodes = ['81', '87', '69', '82', '84','89', '85', '73', '79', '80', '65'];
var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11,', '12', '13', '14', '15', '16', '17', '18'];
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
var years = ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009'];
var randomYear = years[Math.floor(Math.random() * 4)];
var randomMonth = months[Math.floor(Math.random() * 4)];
var randomDay = days[Math.floor(Math.random() * 4)];
var spoofKeyInt = Math.floor(Math.random() * (800 - 100)) + 100;
var spoofTrafficInt = Math.floor(Math.random() * (10000 - 5000)) + 5000;

spoofKeyClick();

function spoofKeyClick() {
	var click = new Event('keydown');
	click.which = click.keyCode = keyCodes[Math.floor(Math.random() * 4)];
	document.dispatchEvent(click);
	setTimeout(spoofKeyClick, spoofKeyInt);
}

// Great, now we have keydowns spoofed. Any JavaScript keylogger will not work now!

navigator.__defineGetter__('userAgent', function(){
    return 'null'
});

// Spoofed user-agent string. Now we'll try to spoof the time.

var date = new Date(randomMonth + " " + randomDay + " " + randomYear);
date.setDate(15); // Date spoofing won't do much because of how many different ways you can call it.
console.log(date);

// Time for site spoofing!

var sites = ['https://www.google.com', 'https://www.classroom.google.com', 'https://www.github.com', 'https://nathanaccidentally.us', 'https://reddit.com'];

function siteSpoofer() {
	var ranSite = sites[Math.floor(Math.random() * 4)];
	window.open(ranSite, '_blank');
	setTimeout(siteSpoofer, spoofTrafficInt);
}
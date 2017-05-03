console.log("Welcome to Secure Spoof. Secure Spoof uses all methods possible to spoof traffic and key clicks to make you a little more safe. It will also force all insecure connecections to use HTTPS://.");

url = window.location.href;
secure = url.replace("http://", "https://");

if (url.includes("http://")) {
	console.log("Trying to force HTTPS://");
	window.location.replace(secure);
} else {
	console.log("URL is already served over HTTPS.");
}

// Above is the basic code for forcing HTTPS, now we can spoof keyclicks to keep those secure.

document.addEventListener("keydown", keyclick, false);

function keyclick() {
	console.log("system says clicked");
}

// Now I need to set an array of key click params so we can spoof it.
var keyCodes = ['81', '87', '69', '82', '84','89', '85', '73', '79'];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
var spoofKeyInt = Math.floor(Math.random() * (1500 - 100)) + 100;

spoofKeyClick();

function spoofKeyClick() {
	var click = new Event('keydown');
	click.which = click.keyCode = keyCodes[Math.floor(Math.random() * 4)];
	console.log(click);
	setTimeout(spoofKeyClick, spoofKeyInt);
}
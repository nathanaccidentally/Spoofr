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
var keyCodes = ['81', '87', '69', '82', '84','89', '85', '73', '79', '80', '65', '83', '68', '70', '71'];
var days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11,', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];
var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November'];
var years = ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '1998', '1999', '2000', '2011', '2012'];
var randomYear = years[Math.floor(Math.random() * 4)];
var randomMonth = months[Math.floor(Math.random() * 4)];
var randomDay = days[Math.floor(Math.random() * 4)];
var spoofKeyInt = Math.floor(Math.random() * (800 - 100)) + 100;
var spoofTrafficInt = Math.floor(Math.random() * (10000 - 5000)) + 5000;

var userAgentStrings = [
    'Offline Explorer/2.5',
    'Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; Nokia;N70)',
    'iTunes/4.7 (Macintosh; U; PPC Mac OS X 10.2)',
    'Mozilla/4.0 (compatible; B-l-i-t-z-B-O-T)',
    'Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US; rv:1.9.0.5) Gecko/2009011615 Firefox/3.0.5 CometBird/3.0.5',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    'HTMLParser/1.6',
    'Galaxy/1.0 [en] (Mac OS X 10.5.6; U; en)',
    'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-GB; rv:1.9.1.17) Gecko/20110123 Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.2) Gecko/20070225 lolifox/0.32',
    'Windows-Media-Player/11.0.5721.5145',
    'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_5; it-it) AppleWebKit/525.18 (KHTML, like Gecko)'
];
var randomUAString = userAgentStrings[Math.floor(Math.random() * 4)];

spoofKeyClick();

function spoofKeyClick() {
	var click = new Event('keydown');
	click.which = click.keyCode = keyCodes[Math.floor(Math.random() * 4)];
	document.dispatchEvent(click);
	setTimeout(spoofKeyClick, spoofKeyInt);
}

// Great, now we have keydowns spoofed. Any JavaScript keylogger will not work now!

navigator.__defineGetter__('userAgent', function(){
    return randomUAString
});
console.log("Your spoofed UA string is: " + navigator.userAgent);

// Spoofed user-agent string. Now we'll try to spoof the time.

var date = new Date(randomMonth + " " + randomDay + " " + randomYear);
date.setDate(15); // Date spoofing won't do much because of how many different ways you can call it.
console.log(date);

// Time for site spoofing!

var sites = ['https://www.google.com',
             'http://www.classroom.google.com',
             'https://www.github.com',
             'https://nathanaccidentally.us',
             'https://newsela.com',
             'https://drive.google.com',
             'https://www.google.com/search?q=cats',
             'https://www.google.com/search?q=fun+school+activities',
             'http://www.jumpstart.com/parents/activities/school-activities',
             'http://www.jumpstart.com/parents/activities/math-activities',
             'https://bing.com',
             'https://www.google.com/search?&q=how+to+make+teacher+happy',
             'https://www.google.com/search?&q=fun+ways+to+use+a+pencil',
             'https://www.google.com/search?&q=how+to+feed+your+cat+household+items'
             ];

function siteSpoofer() {
	var ranSite = sites[Math.floor(Math.random() * 4)];
	window.open(ranSite, '_blank');
	setTimeout(siteSpoofer, spoofTrafficInt);
}

siteSpoofer();
window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
var funcion = function() {
	alert('whooohoooo')
}
var button = document.getElementById('theGreen').addEventListener('click', funcion)
window.myEventListener = function myEventListener()
{
	//your code here
	
	var divaocultar = document.getElementById('firstDiv')
	divaocultar.style.display = 'none';
}

var button = document.getElementById('button').addEventListener('click', myEventListener)
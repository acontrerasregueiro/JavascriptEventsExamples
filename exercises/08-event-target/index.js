window.onload = function loadFn() {
	var containerElm = document.getElementById("container");
	containerElm.addEventListener("click", function(event) {
		//you code here
		alert(event.target.id)
	});
};
/*
var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function(event){
	alert(this.id)
});*/
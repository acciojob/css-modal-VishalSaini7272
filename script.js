//your JS code here. If requhttps://www.svgrepo.com/show/345221/three-dots.svgired.
const modal= document.getElementByClass("modal")
const openBtn = document.getElementById("openModal")
const closeBtn = document.getElementByClass("close-modal")

openBtn.onclick =function(){
	modal.style.display ="flex";
}

closeBtn.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target === modal){
		modal.style.display ="none";
	}
}
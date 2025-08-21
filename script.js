//your JS code here. If requhttps://www.svgrepo.com/show/345221/three-dots.svgired.
const modal= document.querySelector(".modal")
const openBtn = document.getElementById("openModal")
const closeBtn = document.querySelector(".close-modal")

openBtn.onclick =function(){
	modal.style.display ="none";
}

closeBtn.onclick = function(){
	modal.style.display = "none";
}

window.onclick = function(event){
	if(event.target === modal){
		modal.style.display ="none";
	}
}
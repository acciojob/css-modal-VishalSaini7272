// Get elements
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Open modal
openBtn.onclick = function() {
  modal.style.display = "block"; // flex se center + paddingTop kaam karega
}

// Close modal by button
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal by clicking outside
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

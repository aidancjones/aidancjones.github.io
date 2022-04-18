
function buttonClicked() {
  document.getElementById('java-button-1')
  .classList.toggle('is-red');

}

function windowLoaded() {
  document.getElementById('java-button-1')
  .addEventListener('click', buttonClicked);

}

window.onload = windowLoaded;

function bigImg(x) {
  x.style.height = "1134px";
  x.style.width = "750px";
}

function normalImg(x) {
  x.style.height = "234px";
  x.style.width = "150px";
}








// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

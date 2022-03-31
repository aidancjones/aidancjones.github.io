
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

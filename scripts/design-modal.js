// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.querySelectorAll(".design-image");

var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img02");
var captionText = document.getElementById("caption");

for (let i = 0; i<imgs.length; i++) {
  imgs[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg2.src = this.dataset.modal;
    captionText.innerHTML = this.alt;
  }

}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

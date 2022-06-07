// Monster Cards Flip
var card = document.querySelectorAll(".monster-flip-card-test main ul li");
var i;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("click", function() {
    this.classList.toggle("flipped");
  });
}

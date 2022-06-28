// Services Cards Flip
var card = document.querySelectorAll(".card");
var i;

for (i = 0; i < card.length; i++) {
  card[i].addEventListener("mouseover", function() {
    this.classList.toggle("flipped");
    console.log('card flip');
  });
}

// Services Cards Load Animation
window.onload = function() {
  var cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
      setTimeout(function () {
          var item = cards[i]
          item.classList.add("fade");
          console.log('test');
      }, 500 * i);
     }
  }
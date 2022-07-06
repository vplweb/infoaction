// Converts callout blocks into a clickable area
var service = document.querySelectorAll(".card .face__front");

service.forEach((item, index) => {
  item.onclick = function() {
    var serviceLink = item.querySelector('a').href;
    location.href = serviceLink;
  }   
});
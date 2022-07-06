// Converts callout blocks into a clickable area
var service = document.querySelectorAll(".card .face__front");
var i;

for (i = 0; i < service.length; i++) {
  var serviceLink = service[0].children[0].querySelector('a').href;
  service[i].addEventListener("click", function() {
    location.href = serviceLink;
  });
}

// Converts callout blocks into a clickable area
var resource = document.querySelectorAll(".service-node__resources-used .resource-type-node__image");
var resourceLink =  document.querySelectorAll(".service-node__resources-used a").innerHTML;
var i;

for (i = 0; i < resource.length; i++) {
  resource[i].addEventListener("click", function() {
    console.log(resourceLink);
  });
}
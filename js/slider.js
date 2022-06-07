/* Reference - https://codepen.io/kathykato/pen/prEmKe */

window.onload = function() {
  const firstItem = document.querySelector('.views-row');
  const items = document.querySelectorAll('.testimonials-block .views-row');
  const itemCount = items.length;
  const nextItem = document.querySelector('.next');
  const previousItem = document.querySelector('.previous');
  let count = 0;
  
  firstItem.classList.add('active');

  function showNextItem() {
    items[count].classList.remove('active');
  
    if(count < itemCount - 1) {
      count++;
    } else {
      count = 0;
    }
  
    items[count].classList.add('active');
    console.log(count);
  }
  
  function showPreviousItem() {
    items[count].classList.remove('active');
  
    if(count > 0) {
      count--;
    } else {
      count = itemCount - 1;
    }
  
    items[count].classList.add('active');
    console.log(count);
  }
  
  function keyPress(e) {
    e = e || window.event;
    
    if (e.keyCode == '37') {
      showPreviousItem();
    } else if (e.keyCode == '39') {
      showNextItem();
    }
  }
  
  nextItem.addEventListener('click', showNextItem);
  previousItem.addEventListener('click', showPreviousItem);
  document.addEventListener('keydown', keyPress);
  
  
  }
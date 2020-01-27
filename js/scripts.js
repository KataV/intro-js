(function() {
  var itemClassName = "slider__photo";
  (items = document.getElementsByClassName(itemClassName)),
    (totalItems = items.length),
    (slide = 0);

  // Set event listeners
  function setEventListeners() {
    var next = document.getElementsByClassName("slider__button--next")[0],
      prev = document.getElementsByClassName("slider__button--prev")[0];

    next.addEventListener("click", getNext);
    prev.addEventListener("click", getPrev);
  }

  function getNext() {
    if (slide < 4) {
      items[slide].classList.remove("active");
      slide++;
      items[slide].classList.add("active");
    } else {
      items[slide].classList.remove("active");
      slide = 0;
      items[slide].classList.add("active");
    }

    // TODO
  }
  //This is the elegant way of doing the  getNext function.
  // function getNext(){
  //   items[slide].classList.remove("active");
  // if (slide === totalItems -1) {
  //    slide = 0;
  //} else {
  // slide++;
  //}
  //  items[slide].classList.add("active");
  //}
  function getPrev() {
    if (slide > 0) {
      items[slide].classList.remove("active");
      slide--;
      items[slide].classList.add("active");
    } else {
      items[slide].classList.remove("active");
      slide = totalItems - 1;
      items[slide].classList.add("active");
    }

    // TODO
  }

  function initSlider() {
    // setInitialClasses();
    setEventListeners();

    // Set moving to false so that the slider becomes interactive
    moving = false;
  }

  initSlider();
})();

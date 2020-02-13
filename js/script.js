//Getting the time and separating it into hours, minutes and seconds
//Each one has their own variable.

//Moving the clock-arms

function moveThoseArms() {
  var now = new Date(),
    sec = now.getSeconds(),
    minutes = now.getMinutes(),
    hr = now.getHours(),
    tick = 360 / 60;

  //arm position
  var secArm = tick * sec;
  var minArm = tick * minutes + (sec / 60) * tick;
  var hrArm = tick * 5 * hr + (minutes / 60) * tick * 5;

  var HOURHAND = document.querySelector("#hour");
  var MINUTEHAND = document.querySelector("#minute");
  var SECONDHAND = document.querySelector("#second");

  function update() {
    secArm += tick;
    minArm += tick / 60;
    hrArm += tick / 60 / 60;

    HOURHAND.style.transform = "rotate(" + hrArm + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minArm + "deg)";
    SECONDHAND.style.transform = "rotate(" + secArm + "deg)";
  }
  update();
  setInterval(update, 1000);
}

function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

ready(moveThoseArms());
//call that moveThoseArms function every 1000ms

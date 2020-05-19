window.onload = function () {
  var svgNS = "http://www.w3.org/2000/svg";
  var starsGroup = document.getElementById("stars");
  var galaxy = document.getElementById("galaxy").getBoundingClientRect();
  var center = { x: galaxy.width / 2, y: galaxy.height / 2 };
  var stars = [];
  var tweens = [];

  window.onresize = function () {
    galaxy = document.getElementById("galaxy").getBoundingClientRect();
    center = { x: galaxy.width / 2, y: galaxy.height / 2 };
  };

  // STAR OPTIONS //////////////////////////////////////////////////////////////
  var maxRad = Math.sqrt(Math.pow(center.x, 2) + Math.pow(center.y, 2));
  var starCount = 100;
  var speed = 1;
  var innerRadius = 200;
  var minSize = 0.3;
  var maxSize = 1.5;
  //////////////////////////////////////////////////////////////////////////////

  var startPos, tranOrigin, time;
  for (var i = 0; i < starCount; ++i) {if (window.CP.shouldStopExecution(0)) break;
    // add new star
    var star = document.createElementNS(svgNS, "circle");
    startPos = { x: Math.random() * center.x * 2,
      y: Math.random() * center.y * 2 };

    // set basic tag attributes
    star.setAttribute("class", "star");
    star.setAttribute("fill", "white");
    star.setAttribute("stroke", "none");
    star.setAttribute("cx", startPos.x);
    star.setAttribute("cy", startPos.y);
    star.setAttribute("r", Math.random() * maxSize + minSize);

    // add to internal array and svg group
    stars.push(star);
    starsGroup.appendChild(star);

    tranOrigin = "" + (center.x - startPos.x) + "px " + (
    center.y - startPos.y) + "px";

    time = Math.pow(speed * 0.01, -1) * Math.pow(star.getAttribute("r"), -1);
    console.log(time);

    tweens.push(TweenMax.to(star, time, {
      transformOrigin: tranOrigin,
      rotation: 360,
      ease: Power0.easeNone,
      repeat: -1 }));

  }window.CP.exitedLoop(0);


};
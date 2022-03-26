function QuoteChange() {
  /*Quote change*/
  var x = document.getElementById("btn");
  var y = document.getElementById("btn2");
  if (
    x.innerHTML ===
    "“The Best Way To Get Started Is To Quit Talking And Begin Doing.”"
  ) {
    y.innerHTML = "-Winston Churchill";
    x.innerHTML =
      "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”";
  } else {
    y.innerHTML = "-Walt Disney";
    x.innerHTML =
      "“The Best Way To Get Started Is To Quit Talking And Begin Doing.”";
  }
}


var mode = document.getElementById("mode");
var logo = document.getElementById("logo");
mode.onclick = function () {
  /*theme change*/
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    mode.src = "images/UI/sun.png";
    logo.src = "images/UI/logo-red.png";
  } else {
    mode.src = "images/UI/moon.png";
    logo.src = "images/UI/logo-blue.png";
  }
};

function footer_day() {
  let line = "Website made by Bhavya | Have a great";
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  var text = document.getElementById("h3");
  let result = line.concat(" ", day);
  text.innerHTML = result;
}

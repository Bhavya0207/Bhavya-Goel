function QuoteChange() {   /*Quote change*/
  var x = document.getElementById("btn");
  if (x.innerHTML === "“The Best Way To Get Started Is To Quit Talking And Begin Doing.”") {
    x.innerHTML = "“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.”";
  } else {
    x.innerHTML = "“The Best Way To Get Started Is To Quit Talking And Begin Doing.”";
  }

  var y = document.getElementById("btn2");
  if (y.innerHTML === "-Walt Disney") {
    y.innerHTML = "-Winston Churchill";
  } else {
    y.innerHTML = "-Walt Disney"; /*If you see this contact me ✌😀*/
  }
}
	
var mode = document.getElementById("mode");
var logo = document.getElementById("logo")
mode.onclick = function(){  /*theme change*/
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        mode.src = "images/sun.png"
        logo.src = "images/logo-red.png"
    }
    else{
        mode.src="images/moon.png"
        logo.src="images/logo-blue.png"
    }
}

function footer_day(){
    let line="Website made by Bhavya | Have a great"
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    var text=document.getElementById("h3");
    let result = line.concat(" ", day);
    text.innerHTML =result;
}

function preloader() {
	if (document.images) {
		var img1 = new Image();
		var img2 = new Image();
		var img3 = new Image();
    var img4 = new Image();
    var img5 = new Image();

		img1.src = "images/Arduino-P.jpg";
		img2.src = "images/python-p.png";
		img3.src = "images/web.PNG";
    img4.src = "images/bot.png";
    img5.src = "images/laptop.jpg";
	}
}
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}
addLoadEvent(preloader);
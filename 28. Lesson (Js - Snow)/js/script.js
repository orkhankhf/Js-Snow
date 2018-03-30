setInterval(function(){
	var snow = document.createElement("div");
	snow.setAttribute("class", "ball");
	document.body.appendChild(snow);

	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	var randomLeftPos = Math.floor(Math.random() * windowWidth);
	snow.style.left = randomLeftPos+"px";
	var growingNum = 0;
	setInterval(function(){
		snow.style.top = growingNum + "px";
		growingNum++;
	},30);
}, 50);
// var ball = document.querySelector(".ball");
// var windowWidth = window.innerWidth;
// var windowHeight = window.innerHeight;
// var ballWidth = ball.clientWidth;
// var ballHeight = ball.clientHeight;
// ball.style.top = windowHeight / 2 - ballHeight / 2 + "px";
// ball.style.left = windowWidth / 2 - ballWidth / 2 + "px";

// window.onresize = function(){
// 	var ball = document.querySelector(".ball");
// 	var windowWidth = window.innerWidth;
// 	var windowHeight = window.innerHeight;
// 	var ballWidth = ball.clientWidth;
// 	var ballHeight = ball.clientHeight;
// 	ball.style.top = windowHeight / 2 - ballHeight / 2 + "px";
// 	ball.style.left = windowWidth / 2 - ballWidth / 2 + "px";
// }

// window.onmousemove = function(event){
// 	var xPos = event.clientX;
// 	var yPos = event.clientY;
// 	ball.style.top = yPos+"px";
// 	ball.style.left = xPos+"px";
// }

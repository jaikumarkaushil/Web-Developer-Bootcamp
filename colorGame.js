var game = {
	init: function(){
		// level Selector
		levelSelector();
	
	// game features when clicked
		gameFeatures();
	
		reset();
	}
}

var numSquares = 6;
var pickedColor;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");


var level = document.querySelectorAll(".level");

game.init();



// easyBtn.addEventListener("click", function(){
// 	numSquares = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click", function(){
// 	numSquares = 6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })
resetButton.addEventListener("click", function(){
	reset();
});


function gameFeatures(){
	for(var i = 0; i < squares.length; i++) {
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];

		//add click liseners to squares
		squares[i].addEventListener("click", function(){
			 var clickedColor = this.style.backgroundColor;
			 if(clickedColor === pickedColor) {
			 	messageDisplay.textContent = "Correct!";
			 	changeColors(pickedColor);
			 	h1.style.backgroundColor = pickedColor;
			 	resetButton.textContent = "Play Again!";
			 	
			 }
			 else {
			 	this.style.backgroundColor = "#232323";
			 	messageDisplay.textContent = "Try Again";
			 }
		});
	}
}

function levelSelector(){
	for (var i = 0; i < level.length; i++) {
		level[1].classList.add("selected");
		level[i].addEventListener("click", function(){
			level[0].classList.remove("selected");
			level[1].classList.remove("selected");
			this.classList.add("selected");
			// terniary item
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();

		})
		h1.style.backgroundColor = "steelblue";
	}
}
function changeColors(color) {
	for(var i = 0;i < squares.length; i++) {
		//change each color to match givn color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = [];
	// add num random colors to arr
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	//return that array
	return arr;
}
function randomColor() {
	// pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}
function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
		else {
			squares[i].style.display = "none";
		}
	squares[i].style.backgroundColor = colors[i];
	}

}

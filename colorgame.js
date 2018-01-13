var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var goalColor = document.querySelector("#goalColor");
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setUpModeButtons();
	setUpSquares();
	resetGame();
}

function setUpModeButtons() {
	for(var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function () {
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares=3: numSquares = 6;
			// Above is called the ternary operator, like an if statement
			// first part is the condition, second part is if true, third
			// part is if false
			resetGame();	
	});
	}
}

function setUpSquares() {
	for(var i=0; i<squares.length; i++) {
		//add event listener to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor) {
				result.textContent="Correct!";
				resetButton.textContent="Play again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			} else {
				this.style.backgroundColor = "#232323";
				result.textContent="Try Again";
			}
		});
	}
}

function resetGame() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	goalColor.textContent = pickedColor;
	resetButton.textContent="New Colors"
	result.textContent="";
	//change the colors of the squares
	for(var i=0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display= "block";
			squares[i].style.backgroundColor=colors[i];
		} else {
			squares[i].style.display= "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	resetGame();
})

function changeColors(color){
	//loop through all squares
	for(var i=0; i<squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	//Math.random picks a color between 0 and 1
	//Math.floor removes anything after decimal
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	arr = [];
	for(var i=0; i < num; i++) {
		arr.push(randomColor())
	}
	return arr
}


function randomColor(){
	//pick a red from 0 to 255
	var red = Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var green = Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var blue = Math.floor(Math.random()*256);	
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}


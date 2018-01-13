//create secret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number");
var guess = Number(guess)
alert(guess);

// this turns number into guess> Number(guess)

//check guess
if(guess===secretNumber) {
	alert("Wahoo! You got it right. ")
}

else if (guess>secretNumber){
	alert("Too high! Guess again.")
}

else {
	alert("Too low! Guess again.")
}


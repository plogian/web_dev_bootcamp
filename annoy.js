// Version 1

// var answer = prompt("Are we there yet?");

// while(!(answer=="yes"||answer=="yeah")) {
// 	var answer = prompt("Are we there yet?");
// }

// alert("Yay we made it!")

// Version 2

var answer = prompt("Are we there yet?");

// In this version, if -1 does NOT exist in our answer
while(answer.indexOf("yes")==-1) {
	var answer = prompt("Are we there yet?");
}

alert("Yay we made it!")
var age = prompt("What is your age?")
var dayAge = (age*365.25)
alert(age + " years is " + dayAge + " days.")

if(age<0) {
	alert("Error")
} 
 
else if (age==21) {
	alert("Happy 21st birthday!")
} 
 
if (age%2==1)
{
	alert("Your age is odd")
} 

if(age % Math.sqrt(age) === 0) {
  console.log("Your age is a perfect square!");
}
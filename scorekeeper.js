//create selectors for all items
var button1 = document.querySelector("#butt1");
var button2 = document.querySelector("#ass2");
var reset = document.querySelector("#reset");
var score1 = document.querySelector("#player1");
var score2 = document.querySelector("#player2");
var tops = document.querySelector("#top");
var numInput = document.querySelector("#winningscore");
var p1Score=0;
var p2Score=0;
var winningscore=5;
var gameover = false;

button1.addEventListener("click", function(){
	if (!gameover) {
		p1Score+=1;
		if(p1Score===winningscore) {
			gameover=true;
			score1.classList.add("winner");	
		} 
		score1.textContent=p1Score;
	}
});

button2.addEventListener("click", function(){
	if (!gameover) {
		p2Score+=1;
		if(p2Score===winningscore) {
			gameover=true;
			score2.classList.add("winner");	
		} 
		score2.textContent=p2Score;
	}
});

reset.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function() {
	winningscore=Number(this.value);
	tops.textContent=this.value;
	reset();
})

var reset = function() {
	p1Score=0;
	p2Score=0;
	gameover = false;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	score1.textContent=p1Score;
	score2.textContent=p2Score;
}
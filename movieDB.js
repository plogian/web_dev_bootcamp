var movieDB = [
	{	
		name: "In Bruges",
		stars: 5,
		seen: true
	},
	{	
		name: "Frozen",
		stars: 4.5,
		seen: false
	},
	{	
		name: "Mad Max",
		stars: 5,
		seen: true
	},
	{	
		name: "Les Mis",
		stars: 3.5,
		seen: false
	}
]

movieDB.forEach(function(arr) {
	if (arr.seen === true) {
		console.log("You have seen " + arr.name + " - " + arr.stars + " stars.");
	} else {
		console.log("You have not seen " + arr.name + " - " + arr.stars + " stars.");
	}
});


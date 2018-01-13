setTimeout(function() {
 
var	 todos = [];
var input = prompt("What would you like to do?");

while(input !== "quit") {
	//handle input
	if (input === "list") {
		listTodos();	
	} else if (input === "new") {
		addTodos();
	} else if (input === "delete") {
		deleteTodos();
	} 
	//ask again for new input
	input = prompt("What would you like to do?");
}

console.log("OK, you quit the app");


function listTodos() {
	todos.forEach(function(todo, index){
			console.log("***");
			console.log(index + ": " + todo);
			console.log("***");
	});
}

function addTodos() {
		//ask for new to do
		var newTodo = prompt("Enter new todo");
		//add to dos array
		todos.push(newTodo);
}

function deleteTodos () {
	//ask for index of todo to be deleted
	var index = prompt("What is the index of todo to delete?");
	//remove item from todos array. Can use splice method
	todos.splice(index, 1);
	console.log("Item deleted!");
}

}, 200);

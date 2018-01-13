var nums = [45, 65, 77, 34

nums.forEach(function(num){
	console.log(num);
});

function myForEach(arr, func) {
	for(var i=0; i<arr.length; i+=1) {
		func(arr[i]);
	}
}

//Anything defined on the array prototype is usable on any
// array

//This is a keyword in JavaScript that refers to the
// specific object (in this case)

Array.prototype.myForEach = function (func){
	for(var i=0; i<this.length; i+=1) {
		func(this[i]);
	}
}

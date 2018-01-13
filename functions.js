function isEven(num) {
	if(num%2==0) {
		return true;
	}

	else {
		return false;
	}

}


function factorial(num) {
	var fact = 1;
	for(num; num>0; num--) {
		fact = fact * num;
		console.log(fact);
	}
	return fact;
}

function kebabToSnake(str) {
	return str.replace(/-/g, "_");
}




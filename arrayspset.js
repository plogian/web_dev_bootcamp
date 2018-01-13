function printReverse(arr) {
	for(var index=(arr.length-1); index>-1; index-=1) {
		console.log(arr[index]);
	}
}

function isUniform(arr) {
	var i=0;
	var isSame = (arr[i] === arr[i+1]);
	while(isSame=== true && i < arr.length) {
		isSame = (arr[i] === arr[0]);
		i++;
	}
	return isSame;
}

function isUniform2(arr) {
	var first= arr[0];
	arr.forEach(function(element) {
		if(element 1!== first) {
			return false;
		}
	});
	return true;
}

function sumArray(arr) {
	var sum= 0;
	arr.forEach(function add(num) {
		sum= sum + num;
		return sum
	});
	return sum;
}

function max(arr) {
	var currentmax = arr[0];
	arr.forEach(function(num) {
		if (num >currentmax) {
			currentmax = num;
		}
	}
	);
	return currentmax;
}
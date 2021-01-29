"use strict";
// 1
let num = 266219;
let stringNum = num.toString();
let resultSplitNum = stringNum.split('');
// 2
let resultMultiply = resultSplitNum.reduce(function(sum, current) { 
	console.log(current, sum);
	return current * sum;
});

// 3
function pow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}
	// 2176782336
	return result;
}

// 4  
let powResult = pow(resultMultiply, 3);
let powResToString  = powResult.toString();
let twoFirstNumber = powResToString[0] + powResToString[1];
alert(twoFirstNumber); // 21
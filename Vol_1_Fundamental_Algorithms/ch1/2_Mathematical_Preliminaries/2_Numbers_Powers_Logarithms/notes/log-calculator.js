//Log Algorithm as explained in pg 24 of volume 1

function log(x, digitsOfAccuracy) {
	var numberToCheck = x;
	var integerPortion = 0;
	var logAnswer;

	while(numberToCheck >= 10 || numberToCheck < 1) {
		if(numberToCheck < 1) {
			numberToCheck = numberToCheck * 10;
			integerPortion--;
		} else if(numberToCheck >= 10) {
			numberToCheck = numberToCheck / 10;
			integerPortion++;
		}
	}

	logAnswer = integerPortion;
	var currentX = x / Math.pow(10, integerPortion);
	for(var i = 1; i < digitsOfAccuracy; i++) {
		if(currentX * currentX < 10) {
			currentX = currentX * currentX;
		} else {
			currentX = currentX * currentX / 10;
			logAnswer += 1 / Math.pow(2, i);
		}
	}
	return logAnswer;
}

console.log(log(25, 12));

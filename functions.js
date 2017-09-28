// TODO: add your solutions here!
function cat(string, andString){
    return (string.concat(andString));
}

var string = "hello";
var andString = "there";
cat(string, andString);

//next function

function repeat(string, n) {
	for(var i = 0; i < n; i++) {
		console.log(string);
	}
}

var string = "hello";
var n = 5;
repeat(string, n);

//next function

function power(number, pow){
    return number ** pow;
}

var number = 2;
var pow = 4;
power(number, pow);

//next function

function area(radius){
    return (radius ** 2) * (3.14);
}

var radius = 2;
area(radius);

// next function

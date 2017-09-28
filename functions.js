// TODO: add your solutions here!
//concat
function cat(string, andString){
    return (string.concat(andString));
}

var string = "hello";
var andString = "there";
cat(string, andString);

//repeat

function repeat(string, n) {
	for(var i = 0; i < n; i++) {
		console.log(string);
	}
}

var string = "hello";
var n = 5;
repeat(string, n);

//power of

function power(number, pow){
    return number ** pow;
}

var number = 2;
var pow = 4;
power(number, pow);

//Circle Area

function area(radius){
    return (radius ** 2) * (3.14);
}

var radius = 2;
area(radius);



// pythagorean theorem

function coolMath(a, b){
    return (a ** 2) + (b ** 2);
}

var a = 2;
var b = 3;
var c = a + b;
coolMath(a, b);


// is x divisable by y

function isDivisible(x, y){
    if(x%y == 0){
        return true;
    } else{
        return false;
    }

}

var x = 9;
var y = 3;
isDivisible(x, y);





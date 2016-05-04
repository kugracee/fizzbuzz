
$(document).ready(function() {

for (var i=1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    	console.log ("FizzBuzz");
    $("body").append("Fizzbuzz<br />");
    }

	else if (i % 3 === 0) {
		console.log("Fizz");
	$("body").append("Fizz<br />");
	}

	else if (i % 5 === 0) {
		console.log ("Buzz");
	$("body").append("Buzz<br />")
	}

	else { 
		console.log(i);
	$("body").append(i + "<br />");
	}
}
});


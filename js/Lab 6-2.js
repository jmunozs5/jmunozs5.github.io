const MAX = 100;
let firstnumber = Math.floor(Math.random() * Math.floor(MAX));
let secondnumber = Math.floor(Math.random() * Math.floor(MAX));
document.getElementById('firstnumber').innerHTML = firstnumber;
document.getElementById('secondnumber').innerHTML = secondnumber;

function submitanswer() {
	//INPUT
	let firstNumber = parseInt(document.getElementById('firstnumber').innerHTML);
	let secondNumber = parseInt(document.getElementById('secondnumber').innerHTML);
	let ak = firstnumber + secondnumber;
	let answer = parseInt(document.getElementById('answer').value);
	//PROCESSING
	let message = "";
	if(answer == ak) {message = "Correct! Good job.";}	
	else {message = "Sorry. That is incorrect";}
	//OUTPUT
	document.getElementById('result').innerHTML = message;
}


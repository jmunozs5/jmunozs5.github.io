function doFV() {
	let principal = document.getElementById('principal').value; 
	let rate = document.getElementById('annualRate').value; 
	let years = document.getElementById('years').value; 
	let periods = document.getElementById('periodsPerYear').value; 
	let output = computeFutureValue(principal, rate, years, periods);
	document.getElementById("output").innerHTML = "$" + output.toFixed(2);}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
	let futureValue = annualRate / years;
	let time = years * periodsPerYear;
	let output = principal * Math.pow((1 +futureValue), time);
	return output;}
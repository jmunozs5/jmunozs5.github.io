function FootWear () {
	let weather = document.getElementById("weather").value;
	if (weather == "hot") {footwear = "sandals";}
	else if (weather == "rain") {footwear = "galoshes";}
	else if (weather == "snow") {footwear = "boots";}
	else if (weather == "cool") {footwear = "shoes";}
	document.getElementById('output').innerHTML = footwear;
}
function organize() { 
	//INPUT
	let x = document.getElementById('city').value
	let y = document.getElementById('state').value
	let z = document.getElementById('zipcode').value
	//PROCESS
	let output = `${x} ${y}, ${z}`
	//OUTPUT
	document.getElementById('output').innerHTML = output
	}
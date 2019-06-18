function totalamount(){
	let num = parseInt(document.getElementById("number").value);
	let sum = 0;
	for (let i = 1; i <= num; i += 2){ 
		sum += i}
	document.getElementById("submit").innerHTML = sum
}
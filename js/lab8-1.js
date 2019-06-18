/*Defining Table
Input: a number
Processing: add all odd numbers previous to the number given and the number submited
Output: Display total addition of numbers 
*/

function totalamount(){
	let num = parseInt(document.getElementById("number").value);
	let sum = 0;
	for (let i = 1; i <= num; i += 2){ 
		sum += i}
	document.getElementById("submit").innerHTML = sum
}
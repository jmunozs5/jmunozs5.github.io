/*Defining Table
Input: a number
Processing: mutltiply the number given by 1 until 12
Output: Display a table of multiplication of the number given from 1 - 12
*/

function multiply(){
	let num = parseInt(document.getElementById("number").value);
	let table = "";
	for (let i = 1; i <= 12; i ++){ 
		table += num + "x" + i + "=" + num * i + "<br>"}
	document.getElementById("submit").innerHTML = table
}
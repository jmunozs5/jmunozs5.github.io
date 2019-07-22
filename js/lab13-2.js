/*Defining Table
Input: array
Processing: obtain a new set of arrays by multiplying the array given by a factor
Output: show the new array
*/
function sarray () {
    let list = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55,];
    let number = 5
    document.getElementById("array").innerHTML = list;
    document.getElementById("number").innerHTML = number;
    document.getElementById("output").innerHTML = multiply(list, number);}
    
    function multiply(list, multiplier) {
        let products = "";
        for (i=0; i < list.length; i++) {
            let answer = list[i] * multiplier; 
            products+= answer + ", "; }
        return products;}
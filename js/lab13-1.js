/*Defining Table
Input: array
Processing: count the even numbers in the array
Output: the amount of even numbers in the array
*/
function sarray () {
    let list = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55,];
    document.getElementById("array").innerHTML = list
    document.getElementById("output").innerHTML = countEvens(list);}
    
    function countEvens(list) {
        let evens = 0; 
        for (n=0; n < list.length; n++) {
        if (list[n] % 2 == 0) {
            evens++; }
        }
        return evens;}
/*Defining Table
Input: array 
Processing: get the middle number of an array with odd numbers and the average number of an array with the even numbers
Output: middle number of both arrays
*/
function getMiddle(list) {
    list = [10, 20, 30, 40, 50 ,60];
    let result = 0;
    numLength = list.length;
    if (numLength % 2 === 0) {
        result = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else {
        result = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("array").innerHTML = result;
    return result;}

function getMiddleOdd(list) {
    list = [10, 20, 30, 40, 50];
    let result = 0;
    numLength = list.length;
    if (numLength % 2 === 0) { 
        result = (list[numLength / 2 - 1] + list[numLength / 2]) / 2;
    } else { 
        result = list[(numLength - 1) / 2];
    }
    document.getElementById("output").innerHTML = list;
    document.getElementById("array").innerHTML = result;
    return result;}
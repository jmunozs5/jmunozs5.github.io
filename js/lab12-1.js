/*Defining Table
Input: array 
Processing: obtain the first and last variable of the array 
Output: addition of the first and last variable.
*/
function addEnds(list) {
    list = [10, 20, 30, 40, 50 ,60];
      let firstv = list[0];
      let secondv = list[list.length - 1];
      let sum = firstv + secondv;
    
      let mid = 7 + ((13 - 7) >>> 1);
    
      document.getElementById("output").innerHTML = mid;
      document.getElementById("array").innerHTML = list;
  }
  
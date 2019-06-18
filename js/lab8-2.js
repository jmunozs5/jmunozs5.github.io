/*Defining Table
Input: A random number
Processing: input a number and give a notification telling if the number is high or low in comparison with the number to be guessed. 
Output: When the number is guessed corectly, give message showing the number of attempts it took to guess it.
*/

function guessgame(){
    let message = "Enter an number between 1 and 100"
    let answer = 26
    
    let guess
    let counter = 0
    do {counter += 1;
          guess = parseInt(prompt(message));
                if (guess < answer) {
                message = guess +
                " is too low. Please enter another number.";
            }
            else if (guess > answer) {
                message = guess +
                " is too high. Please enter another number.";
            }
        } while (guess != answer);
        message = guess + " is correct. It only took you " + counter + " attempts to guess it.";
     document.getElementById('a').innerHTML = message;
        }
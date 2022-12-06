/* 
!   Challenge
    
*   Provided:
        - A variable called "num". This will generate a random number between 1 and 100.
        - A console log that displays the generated number to assess.
        - A variable holding the integer 100.

    Write a conditional that checks to see if the random number created is even or odd.
        - If it is EVEN
            - Console log "An Even Number: [random number]"
            - create a variable that will store the value of that number divided by the oneHundred variable.
            - Console log "100 divided by [random number] is [value]."
        - If it is ODD
            - Console log "An Odd Number: [random number]"
            - create a variable that will store the difference of the oneHundred variable subtracting the random number.
            - Console log "100 minus [random number] is [value]."

*/

let num = Math.floor((Math.random() * 100)+1);
console.log('The Random Number that was generated is: ', num);
let oneHundred = 100;

// Your Code Below

if(num % 2 === 0) {
    console.log('An Even Number: ', num);
    let value = oneHundred / num;
    // console.log(`100 divided by ${num} is ${value}.`);
    console.log('100 divided by ' + num + " is " + value);
} else {
    console.log('An Odd Number: ', num);
    let value = oneHundred - num;
    console.log(`100 minus ${num} is ${value}.`);
}


//!---------------------------------------------------------------

/* 
!   Challenge

        - Create two variables:
            - reqBakeTimeInMins: stores an integer
            - actBakeTimeInMins: stores an integer
            These values should be whole numbers and represent minutes.
                ie: 15, 30, 45 minutes
        
        - Write a ternary conditional that provides the following console logs:
            - If actBakeTimeInMins is equal to reqBakeTimeInMins
                "Remove from oven. It is done!"
            - If actBakeTImeInMIns is less than reqBakeTimeInMins
                "Still cooking..."
            - Else
                "It's burnt!"

*   Be sure to test the conditions based off different values within actBakeTimeInMins.
*/

let reqBakeTimeInMins = 30;
let actBakeTImeInMIns = 45;

actBakeTImeInMIns === reqBakeTimeInMins ? 
    console.log("Remove from oven. It is done!") : 
    actBakeTImeInMIns < reqBakeTimeInMins ? 
    console.log('Still cooking...') : 
    console.log("It's burnt!");


//! -------------------------------------------------------------- 

/* 
!   Challenge

*   Provided:
        - a variable named "value" that is undefined.
        - a variable named "randomNumber" that generates a random value between 1-10.
        
    Create a Switch Statement that passes the randomNumber in as a expression.
        - With cases that are 2, 3, 5, 7
            - assign the value variable with "Prime".
        - With cases that are 4, 6, 8, 10
            - assign the value variable with "Even".
        - As a default
            - assign the value the randomNumber
    
    Outside of the switch statement
        - console log the value variable
*/

let value;
let randomNumber = Math.floor((Math.random() * 10) + 1);

switch(randomNumber) {
    case 2:
    case 3:
    case 5:
    case 7:
        value = "Prime";
        break;
    case 4:
    case 6:
    case 8:
    case 10:
        value = "Even";
        break;
    default :
        value = randomNumber;
}

console.log(value, randomNumber);
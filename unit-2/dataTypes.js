// Booleans: true or false
let on = true;
console.log(on);

let off = false;
console.log(off);

// Null
let empty = null;
console.log(empty);

// Undefined
let undef = undefined; // instead of assigning our undef variable a datatype of undefined, we can simply just declare the variable.
console.log(undef);

let correct;
console.log(correct);

// Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999; // 15 9s
console.log(precise);

let rounded = 9999999999999999; // 16 9s
console.log(rounded); // JS gives us space for 15 9s before it rounds up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (.2 * 10 + .1 * 10) / 10;
console.log(numbersAreHard);

// String
let stringOne = "double quotes";
let stringTwo = 'single quotes';

console.log(stringOne, stringTwo);

let myQuote = 'they said, "blah blah blah".'
console.log(myQuote);
let mine = "doesn't matter";
console.log(mine);
let sameQuotes = "I said, \"blah blah blah\"";
console.log(sameQuotes); // We would need to use escape characters.

// Numbers vs. Strings
let first = 1234 + 567;
let second = '1234' + '567';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);
// typeof provides us the data type of a variable.

let createNumber = Number('123');
let notANumber = Number('abc');
console.log(notANumber);
console.log(createNumber);
console.log(typeof createNumber);

let sum = '1' + 3;
console.log(typeof sum);
// type coercion: when we take one data type become another.

// Objects
let frodo = {
    race: 'hobbit',
    rings: 1,
    cloak: true
}

console.log(frodo);

// Arrays
let list =   [  'item1', 'item2', 'item3'  ];
//   1       2    3
/* 
    1. Name of the Array, or list.
    2. The array is inside of these square brackets.
    3. each item, regardless of datatype, is separated by commas.

    Denoted by []
*/

let burritos = ['large', 4, true];
console.log(burritos);

console.log(typeof burritos); // comes back as Object 

console.log('Method used to check for arrays: ', Array.isArray(burritos));
console.log('frodo object: ', Array.isArray(frodo));

// Literals
// string literal
let car = 'Ford';
let truck = car; // not literal

// Numeric 
let december = 12;

// Boolean
let tired = true;

// object
let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

// array
let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

console.log(days.toString());
console.log(days.length);
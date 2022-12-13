let noun = 'soup';
let verb = 'eat';
let place = 'Vermont';

function declarationFunction(param1,param2,param3) {
    return `I would like to ${param2} ${param1} in ${param3}`;
}

let comments = declarationFunction(noun, verb, place);
console.log(comments);

let food = "burger";
let action = "make";
place = "Indiana";

let comment2 = declarationFunction(food, action, place);
console.log(comment2);
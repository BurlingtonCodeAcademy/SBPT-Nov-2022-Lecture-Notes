//! Scope

let globalVariable = true;

function checkGlobalVariable() {
    console.log(globalVariable);
}

checkGlobalVariable();

let x = 12;

function scope() {
    let x = 33;
    console.log(x);
};

scope();
console.log(x);

let y = 12;

function newScope() {
    y = 33;
    console.log(y);
    let z = 45;
}

newScope();
console.log(y);
// console.log(z);

//! Var vs Let
/* 
    Variable keywords:
        - const: cannot be reassigned
        - var: scoped to nearest function block
        - let: scoped to the nearest enclosing block
*/
// * Var example - scoped to function block
var a = 12;
function varTest() {
    var a = 33;

    if (true) {
        var a = 45;
        console.log(`Var - within If: ${a}`);
    }

    console.log(`Var - ouside of If: ${a}`);
}

varTest();
console.log(`Var - Outside Function: ${a}`);

//* Let - scoped to enclosing block
let b = 12;
function letTest() {
    let b = 33;

    if(true) {
        let b = 45;
        console.log(`Let - within IF: ${b}`);
    }

    console.log(`Let - within function: ${b}`);
}
letTest();
console.log(`Let - Outside function: ${b}`);
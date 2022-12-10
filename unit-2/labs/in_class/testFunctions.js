let myStatement;

let expressionFn = () => {
    myStatement = "Hello";
}

expressionFn();

// newExpressionFn(myStatement);
declarationFn(myStatement);

let newExpressionFn = (statement) => {
    console.log(`New Expression: ${statement} there!`);
}

function declarationFn(statement) {
    console.log(`Declaration: ${statement} there!`);
}

newExpressionFn(myStatement);
declarationFn(myStatement);

// console.log(expressionFn());
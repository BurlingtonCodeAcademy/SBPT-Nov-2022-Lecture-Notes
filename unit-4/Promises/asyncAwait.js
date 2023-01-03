/* 
!   Async/Await

        - Introduced in ES8 in 2017
        - Can make any function an async function simply by denoting as such.

        Keywords:
            - async
                - denotes a function
            - await
                - calls a process to "wait" for our results.
        
        - Can help us reduce the need for Callback Functions
        - CANNOT be used in loops!
        - ALWAYS returns a promise.
*/

// some syntax
async function asyncFuncDeclaration() {
    // code block...
}

let funcExpression = async function() {
    // code block...
}

let arrowFunc = async() => {
    // code block...
}

//--------------------------------------//
async function getName() {
    return 'Gandalf';
}

console.log(getName());
getName().then(data => console.log(data));

/* 
! Await
    - Tell JS that a promise is being returned and to wait on that result.
*/

async function extraData() {
    let info = await returnData();
    return(`${info} in some cloud...`);
}

extraData()
    .then(data => console.log('Line 50: ', data));

console.log('Check this');
//! Promise
/* 
    3 states: 
        - Pending
        - Fulfilled
        - Rejected

    Is an object that may produce a singular value in the future.
    - Always returns an object

    Takes in two parameters
        - Resolve
        - Reject

        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

*/

//* Mock internet send
// function getData() {

//     setTimeout(() => {
//         return "some Data";
//     }, 3000)

// }

// let data = getData(); // the value comes "late" - 3 seconds
// console.log('Data: ', data); // We get an undefined because the information is delayed when it is compiled.

//* Callbacks - functions the get executed after the end of a process.
function getData(cb) {
    // console.log(cb);
    setTimeout(() => {
        cb("some Data from CB");
    }, 3000);

}

// getData(data => console.log(data));
// getData(info => console.log(`this is my info: ${info}`));
// function thisData() {
//     console.log('This Data');
// }

// thisData();
// console.log("Hello World");

/* 
* A promise is an object that may produce a singular value in the future
*/

function returnData() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if(true) {
                resolve('some data from Promise');
            } else {
                reject('This is a rejection');
            }

        },3000);
        // });

    }) 

}

// console.log(returnData());

/* 
!   Resolvers
        - When returned, the returnData() func. will return a Promise instead of a given string.

        - Chained with a resolver
            - Keywords:
                - .then() 
                    If success
                    can be chained together
                - .catch()
                    If error
            - Takes in a callback function
            - only put the semicolon (;) after the last resolver

            ex: promiseResults.then().then().then().then().catch();
*/

console.log(returnData());
returnData() // returns Promise
    .then(data => console.log('From Response: ', data))
    .then(() => {
        
        let x = 10;
        let y = 20;
        console.log(x + y);

    })
    .catch(function(err) {
        console.error(err);
    });

    /* 
    *   The Process
            - Creating a new Promise
                - reolve / reject are parameters of a callback function
            - setTimeout is acting our "waiting" for a resource.
            - resolve() or reject() said promise.
            - When returned, returns a Promise - not a string
            - use of resolvers (.then() / .catch()) with callbacks to extropolate the info from that promise.
    */
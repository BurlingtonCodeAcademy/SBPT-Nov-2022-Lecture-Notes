//* Variables 
let score = 0; // default for the start of the turn.
let dieRoll; // a variable to hold our roll value.
let stateOfDie = 'not rolled'; // current state of our die.
let numberOfRolls = 0; // starting count for our rolls allowed (1-3);

//* Dictionary
// 1 = 100, 2 = 20, 3 = 30, etc.
const scoring = {
    '1' : 100,
    '2' : 20,
    '3' : 30,
    '4' : 40,
    '5' : 50,
    '6' : 60,
};

//* State of Player
// 3 states: "not rolled", "roll", "score"
let dieState = {
    'not rolled': ['roll'],
    'roll': ['roll', 'score'],
    'score': ['not rolled'],
}

//* Functions
function scoreDie(dict, dieValue) {
    // This will update our score and provide us feedback.

    score += dict[dieValue];
    console.log(`Your score is: ${score}`);
}

function rollDie() {
    // We'll generate a random number and increase our roll count.

    dieRoll = Math.floor((Math.random() * 6) + 1);
    //Math.random(): Random generates a value between 0-1. Multiplies that by 6 and then adds a whole value of 1 (+ 1) so that we start at 1 instead of zero.
    //Math.floor(): Sets our value to a whole number (lowest).
    numberOfRolls++;
}

function playState(task) {
    // pulling in our command and running our condtionals.

    let valid = dieState[stateOfDie];
    // default is "not rolled" but will be updated as players "roll die"

    if(valid.includes(task)) {

        stateOfDie = task;

        if(stateOfDie === 'roll') {

            if(numberOfRolls === 3) {
                console.log(`You've rolled ${numberOfRolls} times and need to score. This roll doesn't count!`)
            } else {
                rollDie();
                console.log(`You rolled a ${dieRoll}. Would you like to roll or finalize the score?`);

                scoreDie(scoring, dieRoll);
                console.log(`Number of rolls: ${numberOfRolls}`);
            }

        }

        if(stateOfDie === 'score') {
            dieRoll = 'not rolled';
            numberOfRolls = 0;
            console.log(`Final Score: ${score}`);
            score = 0;
        }

    } else {
        console.error(`Invalid state for the die: ${stateOfDie} to ${task}`);
    }
}

playState('roll');
playState('roll');
playState('roll');
playState('roll');
playState('score');

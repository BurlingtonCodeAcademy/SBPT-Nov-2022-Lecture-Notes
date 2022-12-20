//! Classes
/* 
    - Introduced in 2015
    - A function that helps us create objects
    - Defines a category of objects

    Base Structure:

    class NameOfClass {
        constructor(parameter) {
            this.key = parameter
        }

        methodName() {
            ... code block
        }
    }
*/

// 1    2
class Item {
//     3               4
    constructor(name, desc, price) {
//       5    6      7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. keyword that denotes what "type" of function we are building
    2. Class name. Noted in Pascal Casing to help determine what type of function we are referencing later in our code.
    3. Another keyword. This is activated when we instantiate a new object.
    4. The parameters for our constructed object. Established the values of our new object.
    5. keyword - refers to "this" specific object being created.
    6. The name of a key to our new object. (An item object will have 3 keys: name, description, price)
    7. The value for those keys (referenced by the parameters)
*/

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new NewObject();
// console.log(one);
one.name = 'sample';
// console.log(one);

let itemZero = new Item();
console.log(itemZero); // returns an object with set keys that hold undefined values.
let itemOne = new Item('bean', 'canned', 0.89);
console.log(itemOne);
// itemZero.name = 'noodle soup';
// console.log(itemZero);

// let brokenItem = Item();
// console.log(brokenItem);
// TypeError: Class constructor Item cannot be invoked without "new".

//* Factory Functions

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(item, desc, cost) {

    return new Item(item, desc, cost);
    // return new Item(iType, iDesc, iCost);
}

let useFunction = processItem(iType, iDesc, iCost);
// let useFunction = processItem();
console.log(useFunction);

//* Methods

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key.
    }

//      1             2
    addToInventory(newItem) {
//           3           4
        this.items.push(newItem);
        // console.log('Item Added!');
        console.table(this.items);
    }
}

//  5
let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn', 'canned', 0.79);

// 6
dryGoods.addToInventory(itemTwo);
dryGoods.addToInventory(itemOne);
console.log(dryGoods);

/* 
    1. Establishing a name for our method.
    2. This method requires a parameter.
    3. "this" is referencing "Dry Goods" object and adding to its array of items.
    4. Using an array method to push to the items array.
    5. Generating a new dept object.
    6. Using dot notation to target our method within our dryGoods object.
*/

//* Factory Methods

class Expense {
    static addUpchargeForProfit(wholesale) {
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }
    // only reachable within the class itself - not global

    constructor(w, u) {
        this.purchased_price = w;
        this.sell_at = u;
    }

    newMethod() {
        console.log('Hi');
    }
}

let itemToSell = Expense.addUpchargeForProfit(1);
console.log(itemToSell);
let anotherItemtoSell = Expense.addUpchargeForProfit(2);
console.log(anotherItemtoSell);

/* 
!   DOM
        - Document Object Model
        - Only through the browser

    Frame:
        - Document: HTML page
            - Is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement

        - Data representation of objects that comprise the structure and content of a document on the web
    
    Basic Structure:
    - Document
        - Head
            - Meta
            - Link
            - Title
        - Body
            - Nav
            - Header
            - Div
            - And any of their attributes
    
    * BOM
        - Browser Object Model
        - Window variable that we can gain access.
        - various methods available.
*/

function askForStuff() {
    prompt();
}


// askForStuff();
// console.log(document);
// console.log(document.URL);
// console.log(document.location);
// console.log(document.title);

let obj = {
    sample: 'this is a sample'
}

// console.log(obj);
obj.sample = 'changed info';
// console.log(obj);

document.title = 'DOM Lesson Updated!';

// Creating our First Element!
let h1 = document.createElement('h1');
// console.log(h1);

/* 
    Our variable now has access to our various properties.
        - innerHTML: can inject a block of HTML
        - innerText: returns the visible text contained in a node.
        - textContent: returns the full text.

        ex: 
            <p>Hello <b>World</b></p>
            ~ innerText would return just "Hello"
            ~ textContent would return "Hello World"
*/

h1.innerText = 'Creating my first DOM element';
// console.log(h1);
h1.style.color = 'blue';
h1.style.textAlign = 'center';

h1.style = `text-shadow: 2px 2px 2px yellow;`;
h1.className = 'h1-class-name';
/* 
    Chain of Events:
        1. Create our element
        2. Apply our values
        3. Place our element
*/

// console.log(document.body);
document.body.appendChild(h1);

// let mainHeader = document.createElement('h1');
// let secHeader = document.createElement('h1');

// mainHeader.innerText = 'Main Header';
// secHeader.innerText = 'Sec Header';

// document.body.appendChild(mainHeader);
// document.body.appendChild(secHeader);

//! Finding Elements

/* 
    HTMLCollection
        - array-like object
        - Allows access to index, properties, and methods to help navigate and modify.
        - Does NOT allow to modify a group of elements all at once.
        - Can loop through
        - Can use .length property to get the size of the list.

    To Get Element
    - use array notation
    - use .item() method

    Accessing Multiple Elements requires these methods:
    - getElementsByTagName();
    - querySelectorAll();
    - getElementsByClassName();
*/

let li = document.getElementsByTagName('li');
// console.log(li[0]);

let bathroom = li[0];
bathroom.style.color = 'red';

// li.style.color = 'yellow';
for(i of li) {
    i.style.color = 'blue';
};

/* 
*   .querySelector([string])
        - Grabs first instance of an element or null if nothing is found.
        - can target by ID, Class, or the Element
            - will need to append # for ID
            - will need to append . for Class
*/

// let firstLi = document.querySelector('li');
// console.log(firstLi);

let toDoList = document.querySelector('#listTitle');
// console.log(`querySelector(#): `, toDoList);
toDoList.style.textAlign = 'center';

/* 
*   .querySelectorAll()
        - Returns astatic nodeList (an array) list of elements.
        * static: will not update
*/

let nodeListLi = document.querySelectorAll('li');
// console.log('querySelectorAll: ', nodeListLi);

//* static example
let newListItem = document.createElement('li');
let ul = document.getElementById('ulToDo');

newListItem.innerText = 'New Item';
ul.appendChild(newListItem);
// console.log(li);

//* getElementsByClassName(className)

let liClass = document.getElementsByClassName('listItem');
// console.log('-----------------')
// console.log('ByClassName: ', liClass);

//! Event Listeners
/* 
    Allows us to execute a function when an event occurs.

    .addEventListener()
        - DOM node method
        - requires an event to "listen" for or type and a callback function.
*/

let btn = document.getElementById('submit');
// let btnNode = document.getElementsByTagName('button');
// console.log(btnNode[0]);

// btn.addEventListener("click", (event) => {
//     console.log(event);
//     console.log('Someone clicked the button!');
// });

/* 
    Adding an item to the list
        Steps:
            - Capture the input
            - Access the parent element
            - Create a new element (li)
            - Assign value to attributes
                - "text value from input"
            - Append to parent element
*/

btn.addEventListener('click', addItem);
let input = document.getElementById('listInput');

function addItem() {
    console.log(input.value); // targeting the input node object and whatever information is being stored in the value property.

    let newItem = document.createElement('li');
    newItem.textContent = input.value;
    // newItem.style = `color: blue;`
    newItem.className = 'listItem';


    ul.appendChild(newItem);
}

// Building Items
let buildBtn = document.getElementById('table-btn');
let shellDiv = document.getElementById('shell-div');

// mock data
const myList = [
    'red','blue','green','purple','yellow','orange'
];

buildBtn.addEventListener('click', buildTable);

function buildTable() {

    myList.forEach((color, i) => {  
        console.log(color);

        //* Create Element
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let p = document.createElement('p');

        //* Assign values to the properties
        h2.textContent = color;
        h2.style.color = color;
        p.innerHTML = `
            Item <u><b>${i}</b></u> in my list.
        `;
        div.style = 'border: solid 1px black';

        //* Set to parent element
        div.appendChild(h2);
        div.appendChild(p);
        shellDiv.appendChild(div);

    });

    shellDiv.style = `
        display: flex;
        align-items: space-around;
    `;

}
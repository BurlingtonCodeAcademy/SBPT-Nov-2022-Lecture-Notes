// Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');
let animals = [];

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(form[0].value);
    // console.log(form.sex.value);

    let species = form[0].value;
    let name = form[1].value;
    let sex = form.sex.value;

    // console.log('species: ', species);
    // console.log('name: ', name);
    // console.log('sex: ', sex);

    let animal = {
        species: species,
        name: name,
        sex: sex
    };

    // console.log(animal);
    animals.push(animal);
    buildTable();
    // console.log(animals);

    form.reset();
    console.log(form.species.value)
    form.species.focus();
});


// Display Tables
function buildTable() {
    console.log('In buildTable: ', animals);
    // console.log(table.firstChild);

    while(table.firstChild) {
        table.removeChild(table.firstChild);
    }

    animals.forEach((a, i) => {
        // console.log(a.name);

        //* 3 steps to displaying to the DOM
        /* 
        ! CREATE
            row
                - data: Pos, Name, Sex, Species
        */
        let tr = document.createElement('tr');
        let pos = document.createElement('td');
        let name = document.createElement('td');
        let sex = document.createElement('td');
        let species = document.createElement('td');

        //! Apply Values
        pos.textContent = i + 1;
        name.textContent = a.name;
        sex.textContent = a.sex;
        species.textContent = a.species;

        //! Append
        tr.appendChild(pos);
        tr.appendChild(name);
        tr.appendChild(sex);
        tr.appendChild(species);
        table.appendChild(tr);
    })
}
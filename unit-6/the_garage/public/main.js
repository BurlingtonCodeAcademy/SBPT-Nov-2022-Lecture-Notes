const vehicles = document.getElementById('display-vehicles');

const displayVehicles = (obj) => {
    // Display Data
    console.log(obj);

    obj.results.map((v, i) => {
        // Create Elements
        const card = document.createElement('div');
        const make = document.createElement('h2')
        const model = document.createElement('h3')
        const year = document.createElement('h5')
        const task = document.createElement('p');

        // Assign attributes & properties
        card.id = `v_${i}`;
        card.className = "card";
        card.style = `
            color: ${
                v.color.toLowerCase() === "white" ?
                    "black" : "white"
            };
            margin: .5em;
            padding: .5em;
            text-align: center;
            background-color: ${v.color};
            border: black solid 5px;
        `;
        make.textContent = v.make;
        model.textContent = v.model;
        year.textContent = v.year;
        task.textContent = `Tasks: ${v.tasks.length}`;

        // Attach to parent element
        card.appendChild(make);
        card.appendChild(model);
        card.appendChild(year);
        card.appendChild(task);
        vehicles.appendChild(card);
    })
}

const getData = async () => {
    // Fetch Data
    const res = await fetch('/vehicle');
    const data = await res.json();
    const info = data;

    displayVehicles(info)
}

getData();
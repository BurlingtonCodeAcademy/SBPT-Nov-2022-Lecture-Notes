import EmployeeInfo from "./EmployeeInfo";

function Employee() {

    let employeeRecords = [
        {
            name: "Jester Bash",
            city: "Miami",
            state: "FL",
            position: "Web Dev",
            food: "pizza"
        },
        {
            name: "Tom Jones",
            city: "Louisville",
            state: "KY",
            position: "UX/UI",
            food: "steak"
        },
        {
            name: "Janet James",
            city: "New York City",
            state: "NY",
            position: "Manager",
            food: "sushi"
        },
    ]

    return(
        <>
            <h1>Employees</h1>
            {
                employeeRecords.map((record, index) => (
                    <EmployeeInfo
                        key={index}
                        name={record.name}
                        city={record.city}
                        state={record.state}
                        food={record.food}
                        position={record.position}
                        />
                ))
            }
        </>
    )
}

export default Employee;
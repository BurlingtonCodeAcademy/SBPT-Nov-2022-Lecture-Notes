import React from 'react'
import PresidentRow from './PresidentRow'

function PresidentTable(props) {

    /* 
    ! Challenge:
        - Update the props to include the "passed" data from the object. 
        - Write a ternary that checks if the president is deceased and respond with either a "Yes" or "No" as a new <td>
            Note: 
                - Add a <th> called "Alive"
                - All data should return back as "Yes" with our current data.
    */

    return (
        <>
            <h2>{props.title}</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birth Year</th>
                        <th>Alive</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.presidents.map((president, i) => {
                            return <PresidentRow 
                                key={i}
                                first={president.first}
                                last={president.last}
                                year={president.year}
                                passed={president.passed}
                            />
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default PresidentTable

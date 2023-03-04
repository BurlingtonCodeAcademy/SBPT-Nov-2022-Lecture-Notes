import React from 'react'

function PresidentRow({first, last, year, passed}) {

    
    // const checkIfAlive = () => {
        
    //     let isAlive = passed === undefined ? "Yes" : "No";
        
    //     return(
    //         <td>{isAlive}</td>
    //     )
    // }

    const date = new Date().getFullYear();

    return (
        <>
            <tr>
                <td>{first}</td>
                <td>{last}</td>
                <td>{year}</td>
                <td>{
                    passed === undefined ?
                        "Yes" : "No"
                }</td>
                {/* <td>{checkIfAlive()}</td> */}
                <td>{
                    passed === undefined ?
                    date - year : passed - year
                    }</td>
            </tr>
        </>
    )
}

export default PresidentRow
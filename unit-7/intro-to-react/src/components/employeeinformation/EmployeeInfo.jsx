import React from 'react';

function EmployeeInfo(props) {

    // console.log(props)

    /* 
    ! Challenge:
        - Update the return to include the CITY/STATE values of what is being passed through the props.
        - Update the objects being passed to include a POSITION & FOOD.
            - Include those values within the returned component.
    */

    

    return(
        <>
            <h1>{props.name}</h1>
            <ul style={{listStyleType: "none", textAlign: "left"}} >
                <li>From: {props.city}, {props.state}</li>
                <li>{props.position}</li>
                <li>Favorite Food: {props.food}</li>
            </ul>
        </>
    )
}

export default EmployeeInfo;
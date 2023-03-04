/* 
    Boiler Plate Code for Functional Component
        - Create a function with a return of JSX (single element)
        - Export the function using export default and the function name.
*/

function Header() {

    const name = "Jack";

    console.log(`Hello ${name}`)
    return(
        <header>
            <h1>Welcome to React, {name}</h1>
        </header>
    )
}

export default Header;
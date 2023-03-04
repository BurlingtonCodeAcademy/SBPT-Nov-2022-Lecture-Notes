import React, {useState} from 'react'

function AddUser({names, setNames}) {

    const [ text , setText ] = useState('');

    const handleChange = (e) => {
        // e.preventDefault();
        // console.log(e)
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(text)
        // console.log(names)

        let addUser = [...names];
        addUser.push(text);
        console.log(addUser);

        setNames(addUser);
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                onChange={handleChange}
                value={text}
                type="text" />
            <br/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default AddUser
import React, {useRef} from 'react'
import { Form, FormGroup, Input, Button} from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import FullButton from '../../button/FullButton';

function Login({updateToken}) {

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // package up our data (users input)
        let bodyObj = JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value
        });

        // target endpoint url
        const url = 'http://localhost:4000/user/login';

        // build try/catch
        try {
            
            const res = await fetch(url, {
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: bodyObj
            });

            const data = await res.json();
            // console.log(data.token);
            
            emailRef.current.value = '';
            passwordRef.current.value = '';
            
            // console.log(data)
            if(data.user) {
                updateToken(data.token);
                navigate('/movie');
            } else {
                alert("Try a different email or password")
            }
            
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Input
                        innerRef={emailRef}
                        type="email"
                        placeholder='email'
                        autoComplete="off"
                    />
                </FormGroup>
                <FormGroup>
                    <Input
                        innerRef={passwordRef}
                        type="password"
                        placeholder='password'
                        autoComplete="off"
                    />
                </FormGroup>
                <FullButton>
                    <Button type="submit" color="dark">Login</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default Login

/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/
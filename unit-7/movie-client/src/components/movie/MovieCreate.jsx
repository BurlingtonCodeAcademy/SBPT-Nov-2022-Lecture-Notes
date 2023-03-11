import React, {useRef} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FullButton from '../button/FullButton';
import { baseURL } from '../../environment';

function MovieCreate(props) {

    const formRef = useRef();
    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const releaseYearRef = useRef();

    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R',];

    const yearRange = () => {
        // we need an array of a range
        // we need to figure THIS year
        // build our range
        // return our element

        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);

        return(
            <>
                <Input innerRef={releaseYearRef} type='select'>
                    {
                        years.map((year, index) => {
                            return <option 
                                        key={index} 
                                        value={year}>
                                            {year}
                                    </option>
                        })
                    }
                </Input>
            </>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(titleRef.current.value);

        const url = `${baseURL}/movie` // setting our url route
        // console.log(url);

        const bodyObj = JSON.stringify({
            title: titleRef.current.value, // getting data from form via useRef to set as title
            genre: genreRef.current.value,
            rating: ratingRef.current.value,
            length: lengthRef.current.value,
            releaseYear: releaseYearRef.current.value
        }); // building our body.object to send to server

        // console.log(bodyObj);

        let myHeader = new Headers();
        myHeader.append("Content-Type", "application/json");
        myHeader.append('Authorization', props.token);

        const requestOptions = {
            headers: myHeader,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const res = await fetch(url, requestOptions)
            const data = await res.json();

            // console.log(data);
            // titleRef.current.value = '';
            formRef.current.reset();
            props.fetchMovies()

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1>Add Movie</h1>
            <Form 
                innerRef={formRef}
                onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input 
                        innerRef={titleRef}
                        autoComplete='off' />
                </FormGroup>
                <FormGroup>
                    <Label>Genre</Label>
                    <Input
                        innerRef={genreRef}
                        type='select' 
                        autoComplete='off' >
                        <option value={""}></option>
                        <option value={"Comedy"}>Comedy</option>
                        <option value={"Drama"}>Drama</option>
                        <option value={"Action"}>Action</option>
                        <option value={"Horror"}>Horror</option>
                        <option value={"Thriller"}>Thriller</option>
                        <option value={"Family"}>Family</option>
                        <option value={"Documentary"}>Documentary</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input 
                        innerRef={ratingRef}
                        type='select'
                        autoComplete='off'>
                        {
                            ratings.map((r, i) => (
                                <option key={i} value={r}>{r}</option>
                            ))
                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Length (in minutes)</Label>
                    <Input 
                        innerRef={lengthRef}
                        type="Number"
                        autoComplete='off' />
                </FormGroup>
                <FormGroup>
                    <Label>Year Released</Label>
                    {yearRange()}
                </FormGroup>
                <FullButton>
                    <Button color="success" >Add Movie</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default MovieCreate

/* 
    title
    genre
    rating
    length
    releaseYear
*/
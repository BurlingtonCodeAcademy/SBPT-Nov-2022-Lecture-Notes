import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import FullButton from '../button/FullButton';
import { baseURL } from '../../environment';

function MovieEdit(props) {

    const { id } = useParams();
    const navigate = useNavigate();
    const [movieTitle, setMovieTitle] = useState('');
    const [movieGenre, setMovieGenre] = useState('');
    const [movieRating, setMovieRating] = useState('');
    const [movieLength, setMovieLength] = useState('');
    const [movieReleased, setMovieReleased] = useState('');

    let ratings = [null, 'G', 'PG', 'PG-13', 'NC-17', 'R',];
    let genres = [null, 'Comedy', 'Drama', 'Action', 'Horror', 'Thriller', 'Family', 'Documentary']

    const yearRange = () => {

        let years = [null];
        const thisYear = new Date().getFullYear();

        for (let i = thisYear; i >= 1892; i--) years.push(i);

        return (
            <>
                <Input
                    value={movieReleased}
                    onChange={e => setMovieReleased(e.target.value)}
                    type='select'>
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

    const url = `${baseURL}/movie/${id}`;

    const fetchMovie = async () => {
        
        const requestOptions = {
            method: "GET",
            headers: new Headers({
                "Authorization": props.token
            })
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            const {
                title, genre, length, rating, releaseYear
            } = data.movie

            setMovieTitle(title);
            setMovieGenre(genre);
            setMovieRating(rating);
            setMovieLength(length);
            setMovieReleased(releaseYear);

            // console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if(props.token) {
            fetchMovie();
        }
    }, [props.token])

    async function handleSubmit(e) {
        e.preventDefault();

        let bodyObj = JSON.stringify({
            title: movieTitle,
            genre: movieGenre,
            rating: movieRating,
            length: movieLength,
            releaseYear: movieReleased
        })

        const requestOptions = {
            headers: new Headers({
                "Authorization": props.token,
                "Content-Type": "application/json"
            }),
            body: bodyObj,
            method: 'PATCH'
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <h1 style={{
                textAlign: "center", textDecoration: "underline"
            }}>Edit Movie</h1>
            <Container>
                <Row>
                    <Col md="4">
                        <p><b>{movieTitle}</b>: <br/>A {movieGenre} rated {movieRating} that runs {movieLength} minutes was released in {movieReleased}. <br/> What needs to be changed?</p>
                        <FullButton>
                            <Button
                                color='info'
                                outline
                                onClick={() => navigate('/movie')}
                            >Back to Table</Button>
                        </FullButton>
                    </Col>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input
                                    value={movieTitle}
                                    onChange={e => setMovieTitle(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Genre</Label>
                                <Input
                                    type='select'
                                    value={movieGenre}
                                    onChange={e => setMovieGenre(e.target.value)}
                                    autoComplete='off'>
                                        {
                                            genres.map((g,i) => 
                                                (
                                                    <option
                                                        key={i}
                                                        value={g}>{g}
                                                    </option>
                                                )
                                            )
                                        }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input
                                    type='select'
                                    value={movieRating}
                                    onChange={e => setMovieRating(e.target.value)}
                                    autoComplete='off'>
                                        {
                                            ratings.map((r,i) => {
                                                return(
                                                    <option
                                                        key={i}
                                                        value={r}>{r}</option>
                                                )
                                            })
                                        }
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Length</Label>
                                <Input
                                    type='number'
                                    value={movieLength}
                                    onChange={e => setMovieLength(e.target.value)}
                                    autoComplete='off' />
                            </FormGroup>
                            <FormGroup>
                                <Label>Year Released</Label>
                                {yearRange()}
                            </FormGroup>
                            <FullButton>
                                <Button color='success'>Update Movie!</Button>
                            </FullButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MovieEdit
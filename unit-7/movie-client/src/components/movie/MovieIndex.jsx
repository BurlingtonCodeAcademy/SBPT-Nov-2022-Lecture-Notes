import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { baseURL } from '../../environment'
import MovieCreate from './MovieCreate'
import MovieTable from './MovieTable'

function MovieIndex(props) {

    const [ movies, setMovies ] = useState([]);

    const fetchMovies = async () => {
        const url = `${baseURL}/movie`;

        const requestOptions = {
            headers: new Headers({
                "Authorization": props.token
            }),
            // browser defaults to GET method
            method: "GET"
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();
            // console.log(data.movies);
            setMovies(data.movies);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if(props.token) {
            fetchMovies();
        }
    }, [props.token])

    return (
        <>
            <Container >
                <Row>
                    <Col md="4" >
                        <MovieCreate token={props.token} fetchMovies={fetchMovies} />
                    </Col>
                    <Col md="8">
                        <MovieTable
                            fetchMovies={fetchMovies}
                            token={props.token} 
                            movies={movies} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default MovieIndex
import React from 'react'
import { Button, Table } from 'reactstrap'
import { baseURL } from '../../environment'
import { useNavigate } from 'react-router-dom';

function MovieTable(props) {

    const navigate = useNavigate();

    async function deleteMovie(id) {
        // console.log(id);
        const url = `${baseURL}/movie/${id}`;

        // const headers = new Headers();
        // headers.append("Authorization", props.token);

        let requestOptions = {
            // headers: headers,
            headers: new Headers({
                "Authorization": props.token
            }),
            method: 'DELETE'
        }

        try {
            
            let res = await fetch(url, requestOptions);
            let data = await res.json();

            // console.log(data.message);
            if(data.message === "Movie Removed") {
                props.fetchMovies();
            } else {
                throw new Error("Movie was not removed!")
            }

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <h1>Movies</h1>
        <Table striped>
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                        Rating
                    </th>
                    <th>
                        Length
                    </th>
                    <th>
                        Year Released
                    </th>
                    <th>
                        Edit / Delete
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                props.movies.map(movie => (
                <tr key={movie._id}>
                    <th scope="row">
                        {movie.title}
                    </th>
                    <td>
                        {movie.genre}
                    </td>
                    <td>
                        {movie.rating}
                    </td>
                    <td>
                        {movie.length}
                    </td>
                    <td>
                        {movie.releaseYear}
                    </td>
                    <td>
                        <Button
                            onClick={() => navigate(`/movie/update/${movie._id}`)}
                            color="warning">Edit</Button>
                        <Button
                            onClick={() => deleteMovie(movie._id)}
                            color="danger">Delete</Button>
                        
                    </td>
                </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}

export default MovieTable
// Let's import useDispatch and useSelector to access Redux
import { useDispatch, useSelector } from 'react-redux';
// Let's also import useEffect
import React, { useEffect } from 'react';



// Create function to return movieDetails
function MovieDetails(){

    // define useDispatch
    const dispatch = useDispatch();

    // access movies reducer
    const movies = useSelector(store => store.movies);

    // use useEffect
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Each movie contains an object of description, id, poster, and title
    // We know on the MovieList component, movie.id, movie.title, movie.poster properties are accessed
    // in order to render on the DOM

    // How do we render movie.description on this page?

    // Return code block to render on page
    return (
        // test to make sure route works
        <div>
            <h1>This works!</h1>
            <p>{movies.map(movie => {
                return (
                    <p>{movie.description}</p>
                )
            })}
            </p>
        </div>
    )
}


// Make sure to export MovieDetails component
export default MovieDetails;

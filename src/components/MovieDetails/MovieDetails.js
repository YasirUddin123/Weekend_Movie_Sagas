// Let's import useDispatch and useSelector to access Redux
import { useDispatch, useSelector } from 'react-redux';
// Let's also import useEffect
import React, { useEffect } from 'react';


// worked with Duncan and Mike on the details page
// Create function to return movieDetails
function MovieDetails({movie}){

    // define useDispatch
    const dispatch = useDispatch();

    // access movies reducer
    const singleMovie = useSelector(store => store.singleMovie);
    console.log(singleMovie);

    // const singleMovieTitle = singleMovie.map
    const singleMovieTitle = [];
    const singleMovieDescription = [];
    // const singleMovieDescription = singleMovie.map
    singleMovie.map(movie => {
        return (
            singleMovieTitle.push(movie.title)
        )})

    singleMovie.map(movie => {
        return (
            singleMovieDescription.push(movie.description)
        )})

    // use useEffect
    // useEffect(() => {
    //     dispatch({ type: 'FETCH_SINGLE_MOVIE' });
    // }, []);

    //

    // Each movie contains an object of description, id, poster, and title
    // We know on the MovieList component, movie.id, movie.title, movie.poster properties are accessed
    // and renders on the DOM

    // How can we render movie.description on this page?

    // Return code block to render on page
    return (
        // test to make sure route works
        <div>
            <h1>This works!</h1>
            <p>{singleMovie.map(singleMovie => {
                return (
                    <>
                        <p>{singleMovie.name}</p>
                    </>
                )
            })}
            </p>
            <p>{singleMovieTitle[0]}</p>
            <p>{singleMovieDescription[0]}</p>
        </div>
    )
}


// Make sure to export MovieDetails component
export default MovieDetails;

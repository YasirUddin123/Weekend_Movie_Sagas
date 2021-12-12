import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// We need to import useHistory in order to route to MovieDetails page
import {useHistory} from 'react-router-dom';
import './MovieList.css'


function MovieList() {

    const dispatch = useDispatch();

    const movies = useSelector(store => store.movies);

    // define use History so we can click to MovieDetails page
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // create a function that will handle the onClick on the image to route to MovieDetails page
    const handleRouteToMovieDetailsPage = (id) => {
        console.log(id);
        // event.preventDefault
        dispatch({
            type: 'FETCH_SINGLE_MOVIE',
            payload:id
        });
        history.push('/details')
    }

     // create a function that will handle the onClick to route to Add a Movie page
    const handleAddMovie = () => {
        history.push('/addyourmovie');
        console.log()
    }

    return (
        <main>
            <h1>MovieList</h1>
            <button onClick={handleAddMovie}>Add a movie!</button>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* insert an onClick function to make each image route to MovieDetails page */}
                            {/* We need to find a way to grab the movie details after this click */}
                            <img
                                src={movie.poster}
                                alt={movie.title}
                                value={movie.id}
                                onClick={() => handleRouteToMovieDetailsPage(movie.id)}
                            />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

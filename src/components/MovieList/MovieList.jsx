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
    const handleRouteToMovieDetailsPage = () => {
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            {/* insert an onClick function to make each image route to MovieDetails page */}
                            <img src={movie.poster} alt={movie.title} onClick={handleRouteToMovieDetailsPage}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

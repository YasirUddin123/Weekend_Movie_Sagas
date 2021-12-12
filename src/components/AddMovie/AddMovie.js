import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { useState } from 'react';

function AddMovie() {

    // make sure define dispatch to send and store data
    const dispatch = useDispatch();

    // define use History so we can click to MovieDetails page
    const history = useHistory();

    const genres = useSelector(store => store.genres);
    console.log(genres);


    //make sure to define a state  to collect add movie user information
    const [newMovie, setNewMovie] = useState({title: '', poster: '', description: '', genre_id: 0});


    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' })
    }, []);


    // create a function that will handle the onClick to route to Add a Movie page
    const handleSaveButton = () => {
        history.push('/');
    }

     // create a function that will handle the onClick to route back to Home Page if user doesn't want to add one
    const handleCancelButton = () => {
        history.push('/');
    }



    return (
        <div>
        <h1>Add a movie!</h1>

        <input placeholder="Movie Title" onChange={(event) => {setNewMovie({...newMovie, title: event.target.value})}}/><br />
        <input placeholder="Movie Poster URL" onChange={(event) => {setNewMovie({...newMovie, poster: event.target.value})}}/><br />
        <textarea placeholder="Movie Description" onChange={(event) => {setNewMovie({...newMovie, title: event.target.value})}}/><br />
        <select onChange={(event) => {setNewMovie({...newMovie, genre_id: event.target.value})}}>
                <option disabled value='0'>Select Genre</option>
                {genres.map((genre) =>  {
                    return  (
                        <option key={genre.id} value={genre.id}>{genre.name}</option>
                    )
                })};
        </select><br />
        <button onClick={handleCancelButton}>Cancel</button><br />
        <button onClick={handleSaveButton}>Save</button>
        </div>



    )
}

export default AddMovie;

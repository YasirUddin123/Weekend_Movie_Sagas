import {useHistory} from 'react-router-dom';

function AddMovie() {

    // define use History so we can click to MovieDetails page
    const history = useHistory();

     // create a function that will handle the onClick to route back to Home Page if user doesn't want to add one
    const handleCancelButton = () => {
        history.push('/');
    }
    // create a function that will handle the onClick to route to Add a Movie page
    const handleSaveButton = () => {
        history.push('/');
    }



    return (
        <div>
        <h1>Add a movie!</h1>
            <button onClick={handleCancelButton}>Cancel</button>
            <button onClick={handleSaveButton}>Save</button>
        </div>
    )
}

export default AddMovie;

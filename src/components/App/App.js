import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

// Make sure to import MovieDetails file
import MovieDetails from '../MovieDetails/MovieDetails'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page. Add a route for this page.
        When a movie poster is clicked,
        a user should be brought to the /details view
        FOR THAT MOVIE. */}
        <Route path="/details" exact>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;

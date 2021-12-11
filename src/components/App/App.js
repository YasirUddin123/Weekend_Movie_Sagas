import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* Details page: Add a Route for this page. I will also need to make a new component for Details */}
        {/* <Route path="/details" exact>
          <MovieDetails />
        </Route> */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;

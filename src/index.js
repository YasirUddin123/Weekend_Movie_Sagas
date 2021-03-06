import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_SINGLE_MOVIE', fetchSingleMovie);
    yield takeEvery('FETCH_GENRES', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}

function* fetchSingleMovie(action) {
    // get all movies from the DB
    try {
        console.log(action.payload);
        const singleMovieID = action.payload
        const singleMovie = yield axios.get(`/api/movie/${singleMovieID}`)
        yield put({
            type: 'SET_SINGLE_MOVIE',
            payload: singleMovie.data
        })
        // const singleMovieGenre = yield axios.get(`/api/movie/${}`)
    } catch (err) {
        console.log('get single error', err);
    }
}

// create a new saga function that will get our genres from the database
// and then update our reducer
function* fetchGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({ type: 'SET_GENRES', payload: genres.data });

    } catch {
        console.log('get all error');
    }
}

// create a new saga function that will allow us to add new movie to database via POST
function* addMovie(action)  {
    console.log('Test POST:', action.payload)
    try {
        const newMovie = yield axios({
            method: 'POST',
            url: '/api/movie',
            data: action.payload
        })

        yield put({ type: 'FETCH_MOVIES' });

    } catch {
        console.log('get all error');
    }
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const singleMovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SINGLE_MOVIE':
            return action.payload ;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singleMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

# Weekend Movies: React-Redux with Redux-Sagas

In this application, I am working on a movie management application! We're already able to see movies that exist in our DB. We'll need to be able to see detailed view for each individual movie, including genres associated with that movie. We also need to able to add a new movie's information.

## High Level Development Plan
    * Database Set up: Create a database named saga_movies_weekend & Run the queries from database.sql on the saga_movies_weekend database ✅
    * Install Dependencies (npm install, npm run server, and npm run client) ✅
    * There are 3 primary components (Home page, Details Page, and Add Movie Page)
        * Home Page
            * Add functionality so when a movie poster is clicked, a user should be brought to the /details view for that movie.
            * Have a way to get to the Add Movie Page
        * Details Page
            * The details page should have a Back to List button, which should bring the user to the Home/List Page
        * Add Movie Page
            * This should show:
                * an input field (for the movie title)
                * an input field (for the movie poster image URL))
                * a textarea (for the movie description)
                * a dropdown (for the genres)
            * The Add Movie page should have the buttons:
                * Cancel button, which should bring the user to the Home/List Page
                * Save button, which should save these inputs in the database and bring the user to the Home/List Page (which now has the new movie)

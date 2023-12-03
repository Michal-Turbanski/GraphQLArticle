import db from './_db.js';

export const resolvers = {
    Query: {
        movies() {
            return db.movies;
        },

        reviews() {
            return db.reviews;
        },

        authors() {
            return db.authors;
        },
    }
}
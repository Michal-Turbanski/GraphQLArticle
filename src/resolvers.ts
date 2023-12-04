import db from './_db.js';

export const resolvers = {
    Query: {
        movies() {
            return db.movies;
        },

        movie(_, args) {
            return db.movies.find(movie => movie.id === args.id);
        },

        reviews() {
            return db.reviews;
        },

        review(_, args) {
            return db.reviews.find(review => review.id === args.id);
        },

        authors() {
            return db.authors;
        },

        author(_, args) {
            return db.authors.find(author => author.id === args.id);
        },
    }
}
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
    },
    Movie: {
        reviews(parent) {
            return db.reviews.filter(review => review.movie_id === parent.id);
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    Review: {
        movie(parent) {
            return db.movies.find(movie => movie.id === parent.movie_id);
        },
        author(parent) {
            return db.authors.find(author => author.id === parent.author_id);
        }
    },
    Mutation: {
        deleteMovie(_, args) {
            db.movies = db.movies.filter(movie => movie.id !== args.id);
            return db.movies;
        },

        addMovie(_, args){
            let movie = {
                ...args.movie,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.movies.push(movie);
            return movie;
        }
    }
}

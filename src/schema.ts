export const typeDefs = `#graphql
    type Movie {
        id: ID!
        title: String!
        category: [String!]!
        reviews: [Review!]
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
        movie: Movie!
        author: Author!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
    }

    type Query {
        movies: [Movie]
        movie(id: ID!): Movie
        reviews: [Review]
        review(id: ID!): Review
        authors: [Author]
        author(id: ID!): Author
    }

    type Mutation {
        addMovie(movie: AddMovieInput): Movie
        deleteMovie(id: ID!): [Movie]
        updateMovie(id: ID!, edits: EditMovieInput!): Movie
    }

    input AddMovieInput {
        title: String!
        category: [String!]!
    }

    input EditMovieInput {
        title: String
        category: [String!]
    }
`;

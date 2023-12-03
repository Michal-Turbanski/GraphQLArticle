export const typeDefs = `#graphql
    type Movie {
        id: ID!
        title: String!
        category: [String!]!
    }

    type Review {
        id: ID!
        rating: Int!
        content: String!
    }

    type Author {
        id: ID!
        name: String!
        verified: Boolean!
    }

    type Query {
        movies: [Movie]
        reviews: [Review]
        authors: [Author]
    }
`;
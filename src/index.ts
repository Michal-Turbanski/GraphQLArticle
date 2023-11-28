import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
const PORT = 4000;

const server = new ApolloServer({
    //typeDefs
    //resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: PORT
    }
});

console.log(`Server is listening on port ${PORT}`);

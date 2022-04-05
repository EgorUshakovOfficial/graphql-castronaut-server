const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api'); 

// Apollo server 
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            trackAPI: new TrackAPI()
        }; 
    }
}); 

const port = process.env.PORT || 4000;

server.listen(port, () => console.log(`Listening on port ${port}`))
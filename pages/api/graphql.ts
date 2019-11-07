import { ApolloServer, gql } from 'apollo-server-micro';
import { Client, query as q } from 'faunadb';

const client = new Client({ secret: 'ThisIsTheSecret' });

const server = new ApolloServer({
    playground: true,
    introspection: true,
    typeDefs: gql`
        type Query {
            test: String!
        }
    `,

    resolvers: {
        Query: {
            test: () => client.query(q.Identity()),
        },
    },
});

export default server.createHandler({ path: '/api/graphql' });

export const config = {
    api: {
        bodyParser: false,
    },
};

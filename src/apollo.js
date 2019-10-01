import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const httpLink = new HttpLink({ 
  uri: 'http://localhost:4000/graphql'
});

const client = new ApolloClient({
    httpLink
});

export default client;
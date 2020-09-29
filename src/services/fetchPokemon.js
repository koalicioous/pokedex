import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/',
    cache: new InMemoryCache()
})

export const FETCH_POKEMONS = gql`{
    pokemons(first:10){
        id
        name
        image
    }
}`;
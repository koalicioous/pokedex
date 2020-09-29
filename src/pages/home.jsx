import React from 'react'
import Card from '../components/poke-card'
import { FETCH_POKEMONS } from '../services/fetchPokemon';
import { useQuery } from '@apollo/client';

export default function Home(props) {
    const { loading,error,data } = useQuery(FETCH_POKEMONS)

    if(loading) return 'loading'

    return (
        <div className="container py-3 d-flex flex-wrap home">
            { 
                data.pokemons.map(({id,name,image}) => (
                    <Card key={id} name={name} image={image} />
                ))
            }
        </div>
    )
}

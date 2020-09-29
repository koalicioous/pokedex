import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

import Spinner from '../components/spinner';
import Specification from '../components/detail-specification'


export default function Detail(props) {

    let {name} = useParams();
    const FETCH_POKEMON_DETAIL = gql`{
        pokemon(name: "${name}"){
            name
            image
            weight {
                minimum
                maximum
              }
              height {
                minimum
                maximum
              }
              classification
              types
              attacks {
                fast {
                  name
                  type
                  damage
                }
                special {
                  name
                  type
                  damage
                }
              }
              resistant
              weaknesses
              evolutions {
                name
                image
              }
        }   
    }`

    const { loading,error,data } = useQuery(FETCH_POKEMON_DETAIL)
    if(loading) return <Spinner/>

    const pokemon = Object.assign({}, data.pokemon)
    if(!pokemon.evolutions) {
        pokemon.evolutions = []
    }

    return (
        <Specification pokemon={pokemon}/>
    )
}


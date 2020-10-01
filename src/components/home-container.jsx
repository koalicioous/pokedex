import React, {useState} from 'react'
import { useQuery, gql } from '@apollo/client'
import Card from '../components/poke-card'
import Spinner from '../components/spinner'


export default function HomeContainer(props) {

    const [fetchCount, setFetchCount] = useState(15)
    
    const FETCH_POKEMONS = gql`{
        pokemons(first:${fetchCount}){
            id
            name
            image
            types
        }
    }`

    window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let newVal = fetchCount + 15;
            setFetchCount(newVal)
        }
    };

    const { loading,error,data } = useQuery(FETCH_POKEMONS)
    if(loading) return <Spinner />
    const pokemons = data.pokemons.map((item) => item)

    return (
        <div className="container py-3 d-flex flex-wrap home">
            { 
                pokemons.map(({id,name,image}) => (
                    <Card key={id} name={name} image={image} />
                ))
            }
        </div>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function EvolutionCard(props) {
    

    return (
        <div className="col-md-6 my-3">
            <Link to={'/' + props.name} className="card card-body shadow-sm poke-card text-dark h-100">
                <img src={props.image} alt="" className="poke-card-image"/>
                <div className="pokemon-name bg-dark text-light">
                    {props.name}
                </div>
            </Link>
        </div>
    )
}

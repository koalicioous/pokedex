import React from 'react'
import DetailItem from '../components/detail-item'
import { Link } from 'react-router-dom'
import Evolution from '../components/evolution-card'

export default function DetailSpecification(props) {
    

    return (
        <div className="container">
        <div className="row justify-content-center">
            <Link to="/" className="mx-3 my-2 mr-auto text-dark"><small>&#8592; Back</small></Link>
            <div className="col-md-12">
                <div className="bg-dark detail-title py-3">
                    {props.pokemon.name}
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-3">
             <div className="col-md-6 mt-2">
                 <div className="card card-body shadow-sm">
                     <img src={props.pokemon.image} alt={props.pokemon.name} className="poke-card-image"/>
                 </div>
                 <div className="card card-body mt-2">
                     <div className="card-header">Evolutions</div>
                     <div className="card-body row justify-content-center">
                         { props.pokemon.evolutions.map((item) => (<Evolution key={item.id} image={item.image} name={item.name} />)) }
                     </div>
                 </div>
             </div>
             <div className="col-md-6 pt-2">
                 <div className="card mb-3 py-2 px-2">
                     <div className="card-header">Weight Range</div>
                     <div className="card-body">
                         {props.pokemon.weight.minimum + ' - ' + props.pokemon.weight.maximum }
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Height Range</div>
                     <div className="card-body">
                         {props.pokemon.height.minimum + ' - ' + props.pokemon.height.maximum }
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Classification</div>
                     <div className="card-body">
                         { props.pokemon.classification }
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Types</div>
                     <div className="card-body">
                         { props.pokemon.types }
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Fast Attacks</div>
                     <div className="card-body">
                         { props.pokemon.attacks.fast.map((item) => (<DetailItem item={item.name} />) )}
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Special Attacks</div>
                     <div className="card-body">
                         { props.pokemon.attacks.special.map((item) => (<DetailItem item={item.name} />) )}
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Resistances</div>
                     <div className="card-body d-flex flex-wrap justify-content-center">
                         { props.pokemon.resistant.map((item) => (<DetailItem item={item} />))}
                     </div>
                 </div>
                 <div className="card mb-3">
                     <div className="card-header">Weaknesses</div>
                     <div className="card-body d-flex flex-wrap justify-content-center">
                     { props.pokemon.weaknesses.map((item) => (<DetailItem item={item}/>))}
                     </div>
                 </div>
             </div>
        </div>
    </div>
    )
}

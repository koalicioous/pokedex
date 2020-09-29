import React from 'react'
import { Link } from 'react-router-dom'

export default function Detail(props) {
    

    return (
       <div className="container">
           <div className="row justify-content-center">
               <Link to="/" className="my-2 mr-auto"><small>&#8592; Back</small></Link>
               <div className="col-md-12">
                   <div className="bg-dark detail-title py-3">
                       {props.name}
                   </div>
               </div>
           </div>
       </div>
    )
}

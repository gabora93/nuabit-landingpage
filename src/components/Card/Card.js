import React from 'react';


const Card = (props) => (
    <div className="card col-md-3">
        <div className="d-flex justify-content-center" >
        {props.icon}
        </div>
        <div className="card-body">
            <h4 className="card-title titulocard" style={{textAlign:'center'}}>{props.title}</h4>
            <p className="card-text textocard" style={{textAlign:'center'}}>{props.text}</p>
        </div>
    </div>
)

export default Card;
import React from 'react'

export default (props) => 
    <React.Fragment>
        <div>Valor Aleatório</div>
        <h2>{ parseInt(Math.random() * (props.max - props.min) + props.min) }</h2>
    </React.Fragment>
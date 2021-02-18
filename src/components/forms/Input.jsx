import React, { useState } from 'react'

export default props => {

    let [valor, setValor] = useState('Valor Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return <div className="Input">
        <div>{valor}</div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <input value={valor} onChange={quandoMudar}/>
            <input value={valor} readOnly/>
            <input value={undefined}/>
        </div>
    </div>
}
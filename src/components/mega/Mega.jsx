import React, {useState} from 'react'

export default props => {

    const [qtde, setQtde] = useState(props.qtde || 6)
    const [jogos, setJogos] = useState(Array(props.qtde || 6).fill(0))

    function geraNumeros() {
        let numbers = [];
        let aux = 0;
        for (let i = 0; numbers.length < qtde; i++) {
          aux = Math.round(Math.random() * (60 - 1) + 1)
          numbers.includes(aux) ? aux = 0 : numbers.push(aux)
        }
        return numbers.sort((a,b) => a-b);
    }

    return(
    <div>
        <h2>Mega</h2>
        <input type="number" min="6" value={qtde} onChange={e => setQtde(+e.target.value)}/>
        <h3>{jogos.join(' ')}</h3>
        <button onClick={_ => setJogos(geraNumeros(qtde))}>Gerar Números</button>
    </div>
    )
}
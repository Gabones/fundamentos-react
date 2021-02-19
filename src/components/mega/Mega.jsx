import React, {useState} from 'react'
import Display from '../contador/Display'

export default props => {

    let [jogos, setJogos] = useState('6')

    function naMudança(e) {
        if (e.target.value >= 6) {
            setJogos(e.target.value)
        }
    }

    function geraNumeros() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < jogos; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return(
    <div>
        <div>MegaSena</div>
        <input id="nrojogo" type="number" value={jogos} onChange={naMudança}/>
        <Display numero={jogos}></Display>
        <div>
            <button onClick={geraNumeros}>Gerar Jogo</button>
        </div>
    </div>
    )
}
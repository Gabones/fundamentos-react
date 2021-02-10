import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

//const el = document.getElementById('root')
//ReactDOM.render('Olá React!!!', el)

//ReactDOM.render('Olá React!!!', document.getElementById('root'))

//ReactDOM.render(<h1><strong>Olá React!!!</strong>   </h1>, el)

// const tag = <h1><strong>Olá React!!!</strong></h1>
// ReactDOM.render(
//     <div>
//         {tag}
//     </div>,
// el)

const tag = <h1><strong>Olá React!!!</strong></h1>
export default _ => 
    <div>
        <h1>Fundamentos React (Arrow)</h1>
        <Fragmento></Fragmento>
        {/* <ComParametro titulo="Bem loko" subtitulo="Empolgante"/> */}
        <ComParametro situacao="Situação do aluno" aluno="Pedro" nota={6.8}/>
        <Primeiro></Primeiro>
    </div>

import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
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
ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        {/* <ComParametro titulo="Bem loko" subtitulo="Empolgante"/> */}
        <ComParametro situacao="Situação do aluno" aluno="Pedro" nota={6.8}/>
        <Fragmento></Fragmento>
    </div>,
document.getElementById('root'))
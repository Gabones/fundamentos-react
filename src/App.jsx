import React from 'react'
import './App.css'

import ParImpar from './components/condicional/ParImpar'
import Produtos from './components/repeat/Produtos'
import ListaAluno from './components/repeat/ListaAlunos'
import FamiliaAdvanced from './components/basicos/FamiliaAdvanced'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Familia from './components/basicos/Familia'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Random from './components/basicos/Random'
import Card from './components/layout/Card'
import User from './components/condicional/User'


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

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const tag = <h1><strong>Olá React!!!</strong></h1>
export default _ => 
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#08 - Renderização Condicional" color={getRandomColor()}>
                <ParImpar numero = {19} ></ParImpar>
                <User usuario={{ nome: "Gabriel" }}></User>
                <User usuario={{ }}></User>
            </Card>
            <Card titulo="#07 - Tabela de Produtos" color={getRandomColor()}>
                <Produtos></Produtos>
            </Card>
            <Card titulo="#06 - Componentes com Filhos" color={getRandomColor()}>
                <ListaAluno></ListaAluno>
            </Card>
            <Card titulo="#05.5 - Componentes com Filhos" color={getRandomColor()}>
                <FamiliaAdvanced sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="João" />
                </FamiliaAdvanced>
            </Card>
            <Card titulo="#05 - Componentes com Filhos" color={getRandomColor()}>
                <Familia sobrenome="Albuquerque"></Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color={getRandomColor()} >
                <Random min={1} max={60} />
            </Card>
            <Card titulo="#03 - React Fragment" color={getRandomColor()}>
                <Fragmento></Fragmento>
            </Card>
            <Card titulo="#02 - Com Parâmetro" color={getRandomColor()}>
                <ComParametro situacao="Situação do aluno" aluno="Pedro" nota={6.8}/>
            </Card>
            <Card titulo="#01 - First" color={getRandomColor()}>
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>

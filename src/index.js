import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById('root')
//ReactDOM.render('Olá React!!!', el)

//ReactDOM.render('Olá React!!!', document.getElementById('root'))

//ReactDOM.render(<h1><strong>Olá React!!!</strong>   </h1>, el)

const tag = <h1><strong>Olá React!!!</strong></h1>
ReactDOM.render(
    <div>
        {tag}
    </div>,
el)
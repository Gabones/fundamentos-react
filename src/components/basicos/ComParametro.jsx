import React from 'react'

// export default function ComParametro(props) {
//     const sub = props.subtitulo
//     return (
//         <div>
//             <h2>{props.titulo}</h2>
//             <h3>{ sub }</h3>
//         </div>
//     )
// }

//props são somente leitura
export default function ComParametro(props) {
    const nota = props.nota
    const status = nota >= 7 ? 'Aprovado':'Reprovado'
    return (
        <div>
            <h2>{ props.situacao }</h2>
            <h3>{ props.aluno }</h3>
            <h4>{ status }</h4>
        </div>
    )
}
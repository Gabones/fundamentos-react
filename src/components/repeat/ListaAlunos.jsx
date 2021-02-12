import React from 'react'
import alunos from '../../data/aluno'

export default props => {
    //const li1 = <li>{alunos[0].id}) {alunos[0].nome} - {alunos[0].nota}</li>

    const lis = alunos.map(aluno => <li key={aluno.id}>{aluno.id}) {aluno.nome} - {aluno.nota}</li>,)

    return (
        <div>
            <ul style={{ listStyle: 'none'}}>
                {lis}
                {/* {li1}
                <li>Ana - 9.7</li>
                <li>Carlos - 8.3</li>
                <li>José - 7.1</li> */}
            </ul>
        </div>
    )
}
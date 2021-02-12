import React from 'react'
import If, {Else} from './If'

export default props => 
    <div>
        {/* <If test={props.usuario && props.usuario.nome}>
            Seja bem vindo <strong>{props.usuario.nome}</strong>!
        </If>
        <If test={!props.usuario || !props.usuario.nome}>
            Seja bem vindo <strong>Buddy</strong>!
        </If> */}
        <If test={props.usuario && props.usuario.nome}>
            Seja bem vindo <strong>{props.usuario.nome}</strong>!
            <Else>
                Seja bem vindo <strong>Amigão</strong>!
            </Else>
        </If>
        
    </div>

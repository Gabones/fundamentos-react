import React, {Component} from 'react'
import './Contador.css'
import PassoForm from './PassoForm'
import Display from './Display'
import Botoes from './Botoes'


class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passo || 1
    }

    increment = () => this.setState({numero: this.state.numero + this.state.passo})
    decrement = () => this.setState({numero: this.state.numero - this.state.passo})

    setPasso = (e) => this.setState({passo: +e.target.value})

    render() {
        return <div className="Contador">
            <div>Contador</div>
            {/* <div>Valor Inicial: {this.state.numero}</div> */}
            <Display numero={this.state.numero}></Display>
            <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
            <Botoes incrementar={this.increment} decrementar={this.decrement}></Botoes>
        </div>
    }
}

export default Contador
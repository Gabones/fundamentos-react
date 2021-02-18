import React, {Component} from 'react'
import './Contador.css'

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
            <div>Valor Inicial: {this.state.numero}</div>
            <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso}/>
            <button onClick={this.increment}>Incremento (+)</button>
            <button onClick={this.decrement}>Decremento (-)</button>
        </div>
    }
}

export default Contador
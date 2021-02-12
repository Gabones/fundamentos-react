import React from 'react'
import './Produtos.css'
import produtos from '../../data/produtos'

export default props => {
    const tb = produtos.map((produto, i) => 
    <tr key={produto.id} className={i % 2 == 0 ? 'Par': ''}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>R$ {produto.preco}</td>
    </tr>,)

    return (
        <div className="TabelaProdutos">
            <table border='0.5'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {tb}
                </tbody>
            </table>
        </div>
    )
}
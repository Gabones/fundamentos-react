export default props => {

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50
    const gerarNerd = () => Math.random() >= 0.5

    return(
    <div>
        <div>Filho</div>
        <button onClick={ _ =>  {props.quandoClicar('Gladimir' , gerarIdade(), gerarNerd())}}>Fornecer Informação</button>
    </div>
    )
}
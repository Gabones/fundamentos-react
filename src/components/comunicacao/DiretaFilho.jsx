export default props => 
<div>
    <span> {props.text} </span>
    <span> {props.number} </span>
    <span> {props.bool ? 'Verdadeiro' : 'Falso'} </span>
</div>

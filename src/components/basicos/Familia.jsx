import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default (props) => (
<React.Fragment>
    <FamiliaMembro nome="Pedro" sobrenome={ props.sobrenome }/>
    <FamiliaMembro nome="Ana" {...props}/>
    <FamiliaMembro nome="João" sobrenome="da Rosa" />
</React.Fragment>
)
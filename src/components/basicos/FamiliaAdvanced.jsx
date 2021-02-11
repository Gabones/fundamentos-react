import React, { cloneElement } from 'react'

//export default (props) => <React.Fragment> { props.children } </React.Fragment> //1 elemento

//export default (props) => <React.Fragment> { React.cloneElement(props.children) } </React.Fragment> //1 elemento

// export default (props) => (
//     <React.Fragment>
//         { React.cloneElement(props.children, {...props }) }
//     </React.Fragment>
// )

// export default props => (        //React.map
//     <React.Fragment>
//         { React.Children.map(props.children, child => {
//             return React.cloneElement(child, props)
//         }) }
//     </React.Fragment>
// )

// export default props => (       //props.map sem key (erro console)
//     <React.Fragment>
//         { props.children.map( child => { return React.cloneElement(child, props) }) }
//     </React.Fragment>
// )

export default props => (       //props.map sem key (erro console)
    <React.Fragment>
        { props.children.map( (child,i) => { return React.cloneElement(child, { ...props, key: i }) }) }
    </React.Fragment>
)
import React from "react"

export default (props) => (

    <div id={ props.id } className="focus">
        <h2>{ props.title }</h2>
        {props.children}
    </div>

)

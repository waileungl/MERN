import React from "react";

const Personcard = props => {
    return(
        <div>
            <h1>{ props.firstName }, { props.lastName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair color: { props.hairColor }</p>
        </div>
    )
}


export default Personcard;

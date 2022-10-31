import React, { useState } from "react";

const Boxes = props => {
    const { attributes } = props
    return(
        <>
        <h2>Your created boxes here:</h2>
        <div style={{ display: "flex" }}>
            { attributes.map( (item, i) => 
            <div style={{ 
                        backgroundColor: item[0],
                        width: item[1],
                        height: item[2],
                        margin: "10px"
                        }} key={ i } ></div> )}
        </div>
        </>
    )
}


export default Boxes;
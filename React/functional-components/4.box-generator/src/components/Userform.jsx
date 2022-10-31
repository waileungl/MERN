import React, { useState } from "react";

const Userform = props => {
    const [color, setColor] = useState("")
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")
    const { attributes, setAttributes } = props

    const addAttribute = () => {
        const newAttributes = [...attributes];
        newAttributes.push([color, width + "px", height + "px"]);
        setAttributes(newAttributes);
        setColor("")
        setWidth("")
        setHeight("")
        }
    return(
        <>
        <div>
            <h3>Add your favourite Color</h3>
            <input 
            type="text" placeholder="Enter color here" 
            onChange={ e => setColor(e.target.value) }
            value={ color }></input>

            <h3>Define size of the box (Unit in pixel)</h3>
            <label>Width: </label>
            <input 
            type="text" placeholder="Enter width here" 
            onChange={ e => setWidth(e.target.value) }
            value={ width }></input>
            <br />
            <label>Height: </label>
            <input 
            type="text" placeholder="Enter height here" 
            onChange={ e => setHeight(e.target.value) }
            value={ height }></input>
            <p></p>
            <input type="button" value="Create box!" onClick={ addAttribute }/>
        </div>
        </>
    )
}

export default Userform;

import React, { useState } from "react";
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const Survey = (props) => {
    const navigate = useNavigate();
    const[input, setInput] = useState("");
    const[color, setColor] = useState("");
    const[backgroudColor, setBackgroundColor] = useState("");

    
    const Home = props => {
        return(
            <>
                <h1>Welcome!</h1>
                <button onClick={ e => {
                    navigate("/");
                }}>Back</button>
            </>
        )
    }

    const Input = props => {
        const {input} = useParams();
        if (isNaN(input)){
            return(
                <>
                    <h1>The word is: {input}</h1>
                    <button onClick={ e => {
                        navigate("/");
                        setInput("");
                        setColor("");
                        setBackgroundColor("");
                    }}>Back</button>
                </>
            )
        }
        return(
            <>
                <h1>The number is: {input}</h1>
                <button onClick={ e => {
                    navigate("/");
                    setInput("");
                    setColor("");
                    setBackgroundColor("");
                }}>Back</button>
            </>
        )
    }

    const InputColorful = props => {
        const {input, fontColor, backgroundColor} = useParams();
        if (isNaN(input)){
            return(
                <>
                    <h1 style={{ color:fontColor, backgroundColor: backgroundColor }}>The word is: {input}</h1>
                    <button onClick={ e => {
                        navigate("/");
                        setInput("");
                        setColor("");
                        setBackgroundColor("");
                    }}>Back</button>
                </>
            )
        }
        return(
            <>
                <h1 style={{ color:fontColor, backgroundColor: backgroundColor }}>The number is: {input}</h1>
                <button onClick={ e => {
                        navigate("/");
                        setInput("");
                        setColor("");
                        setBackgroundColor("");
                }}>Back</button>
            </>
        )
    }

    const goInputWithStyle = props => {
        if(color.length && backgroudColor.length){
            navigate(`/${input}/${color}/${backgroudColor}`);
        }else{
            navigate(`/${input}`);
        }

    }

    return (
        <>
            <h5>Key in your route</h5>
            <h5>The magic would show below:</h5>
            <hr />
            <p>
                <Link to="/home">Home</Link>
                <p></p>
                <label>Your input here: </label>
                <input type="text" value = {input} onChange={e => setInput(e.target.value)} />
                <p></p>
                <h4>Set style here:</h4>
                <label>Font-color</label>
                <input type="text" value = {color} onChange={e => setColor(e.target.value)} />
                <label>Background-color</label>
                <input type="text" value = {backgroudColor} onChange={e => setBackgroundColor(e.target.value)} />
                <p></p>
                <button onClick={ goInputWithStyle } >Go!</button>
            </p>
            <Routes>
                <Route path="/home" element={<Home />}/>
                <Route path="/:input" element={<Input />}/>
                <Route path="/:input/:fontColor/:backgroundColor" element={<InputColorful />}/>
            </Routes>
        </>
    );
}

export default Survey;


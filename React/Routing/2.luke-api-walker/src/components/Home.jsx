import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Home = props => {
    const navigate = useNavigate();
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");

    const handleSearch = () => {
        navigate(`/${category}/${id}`);
    }

    return (
        <>
            <h5>Luke APIwalker</h5>
            <hr />
            <label>Select Category: </label>
            <select value={category} onChange={e => setCategory(e.target.value)} >
                <option selected>---Select---</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <br />
            <label>ID: </label>
            <input type="number" value={id} onChange={e => setId(e.target.value)} />
            <button onClick={handleSearch}> Search</button>
        </>
    )
}


export default Home;
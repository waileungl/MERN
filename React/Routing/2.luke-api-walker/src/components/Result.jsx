import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from "axios"

const Result = () => {
    const {id, category} = useParams();
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`)
        .then(res => {
            console.log(id);
            console.log(category);
            console.log(res.data);
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        });
    }, []);
        
    if(category === "people"){
        return(
            <>
            <hr />
            <h3>{ data.name}</h3>
            <p></p>
            <h5>Height: {data.height}</h5>
            <h5>Mass: {data.mass}</h5>
            <h5>Hair Color: {data.hair_color}</h5>
            <h5>Skin Color: {data.skin_color}</h5>
            
            <button onClick={ e => {
                navigate("/");
            }}>Back</button>
        </>
        )
    }

    if(category === "planets"){
        return(
            <>
                <hr />
                <h3>{ data.name}</h3>
                <p></p>
                <h5>Climate: {data.climate}</h5>
                <h5>Terrain: {data.terrain}</h5>
                <h5>Surface Water: {data.surface_water}</h5>
                <h5>Population: {data.population}</h5>
                <button onClick={ e => {
                    navigate("/");
                }}>Back</button>
            </>
        )
    }
}
        
export default Result;
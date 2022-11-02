import React, { useEffect, useState } from 'react';
import eachPokemon from './EachPokemon';
import axios from "axios"
import EachPokemon from './EachPokemon';

const Pokemon = props => {
    const[data, setData] = useState([])

    const fecthDigimon = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
            .then(res => {
                setData(res.data.results)
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <button onClick={fecthDigimon}>Fetch Pokemon!</button>
            {
                data.map((item, i) => 
                    <div style={{ display:"flex" }}>
                        <h3>{i+1}. </h3>
                        <EachPokemon key = {i} pokemon = {item}/>
                    </div>
                )
            }
        </>
    )
}

export default Pokemon;
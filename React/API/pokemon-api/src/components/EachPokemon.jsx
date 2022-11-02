import React, { useEffect, useState } from 'react';
import axios from "axios"

const EachPokemon = props => {
    const {key, pokemon} = props
    const[image, setImage] = useState("")
    useEffect(()=>{
        axios.get(pokemon.url)
            .then(res => {
                setImage(res.data.sprites.front_default)
            })
        }, []
    ); 
    console.log(key);

    return(
        <>
            <h3> {pokemon.name}</h3>
            <img src={ image } alt="pokemon" />
        </>
    )
}

export default EachPokemon;
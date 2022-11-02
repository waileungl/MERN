import React, { useEffect, useState } from 'react';
import axios from "axios"

const Digimon = props => {
    const[digit, setDigit] = useState([])

    const fecthDigimon = e => {
        axios.get("https://digimon-api.vercel.app/api/digimon")
            .then(res => {
                setDigit(res.data)
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <button onClick={fecthDigimon}>Fetch Digimon!</button>
            {
                digit.map((item, i) => 
                    <>
                        <div key={i}>{i+1}. {item.name} </div>
                        <img src= {item.img} alt="digimon" />
                    </>
                )
            }
        </>
    )
}

export default Digimon;
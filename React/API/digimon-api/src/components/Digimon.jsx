import React, { useEffect, useState } from 'react';

const Digimon = props => {
    const[data, setData] = useState([])

    const fecthDigimon = e => {
        fetch("https://digimon-api.vercel.app/api/digimon")
            .then(response => {
                return response.json();
            }).then(response => {
                setData(response);
                console.log(response);
            }).catch(err => {
                console.log(err);
            });
    }
    return (
        <>
            <button onClick={fecthDigimon}>Fetch Digimon!</button>
            {data.map(
                (item, i) => 
                <div key={i}><span>{i+1}. </span>{ item.name }</div>
            )}
        </>
    )
}

export default Digimon;
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';


const Main = props => {
    const [ loaded, setLoaded ] = useState(false)
    const { people, setPeople } = props;

    useEffect(()=>{
        axios.get("http://localhost:8000/api")
            .then(res => {
                setPeople(res.data);
                setLoaded(true);
            })
    }, []);

    const removeFromDom = id => {
        setPeople(
            people.filter(product => product._id !== id)
        )
    }
    return (
        <div>
            <h3>Product Manager</h3>
            <PersonForm  people={people} setPeople={setPeople}/>
            <hr/>
            <h1>All Products:</h1>
            {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
        </div>
    )
}

export default Main;
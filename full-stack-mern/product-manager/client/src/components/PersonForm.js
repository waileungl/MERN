import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonList from '../components/PersonList';


const PersonForm = props => {
    const { people, setPeople } = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const clickHandler = e => {
        const newPerson = {
            title : title,
            price: price,
            description: description
        }
        console.log(newPerson);
        addNewPerson(newPerson);
        setTitle("");
        setPrice("");
        setDescription("");
    }

    const addNewPerson = (person) => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                console.log(res);
                setPeople([...people, res.data])
            })
            .catch(err=>console.log("Error on adding new person!", err))
    }

    //onChange to update firstName and lastName
    return (
        <>
            <p>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Title' />
            </p>
            <p>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Price' />
            </p>
            <p>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Description' />
            </p>
            <button onClick={ clickHandler }>Creare</button>
        </>
    )
}

export default PersonForm;
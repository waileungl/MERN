import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PersonList from '../components/PersonList';
import PersonForm from '../components/PersonForm';


const Main = props => {
    const [ loaded, setLoaded ] = useState(false)
    const [ people, setPeople ] = useState([])

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

    // const PersonForm = props => {
    //     //keep track of what is being typed via useState hook
    //     const [title, setTitle] = useState(""); 
    //     const [price, setPrice] = useState("");
    //     const [description, setDescription] = useState("");
    //     //handler when the form is submitted
    //     const clickHandler = e => {
    //         const newPerson = {
    //             title : title,
    //             price: price,
    //             description: description
    //         }
    //         console.log(newPerson);
    //         addNewPerson(newPerson);
    //         setTitle("");
    //         setPrice("");
    //         setDescription("");
    //     }
    
    //     const addNewPerson = (person) => {
    //         axios.post('http://localhost:8000/api/people', person)
    //             .then(res=>{
    //                 console.log(res);
    //                 setPeople([...people, res.data])
    //             })
    //             .catch(err=>console.log("Error on adding new person!", err))
    //     }
    
    //     //onChange to update firstName and lastName
    //     return (
    //         <>
    //             <p>
    //                 <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Title' />
    //             </p>
    //             <p>
    //                 <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Price' />
    //             </p>
    //             <p>
    //                 <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Description' />
    //             </p>
    //             <button onClick={ clickHandler }>Creare</button>
    //         </>
    //     )
    // }

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
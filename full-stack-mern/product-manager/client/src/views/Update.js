import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = props => {
    const { id } = useParams();
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const { people, setPeople } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.error(err));
    }, []);

    const updateHandler = e => {
        const updatedProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.put(`http://localhost:8000/api/people/${id}`, updatedProduct)
            .then(
                res => {
                    setPeople([...people, res.data])
                    navigate("/people")
                }
            )
    }

    return(
        <div>
            <h3>Update Product details</h3>
            <p>
                <label>Title</label>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder='Title' />
            </p>
            <p>
                <label>Price</label>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Price' />
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} placeholder='Description' />
            </p>
            <button onClick={ updateHandler } >Submit</button>
        </div>
    )
}

export default Update;
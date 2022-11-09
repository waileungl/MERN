import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";
    
const Detail = (props) => {
    const [data, setData] = useState({})
    const { id } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.error(err));
    }, []);
    
    const backHomeHandler = () => {
        navigate("/people");
    }

    return (
        <div style={{ marginTop: "200px" }}>
            <h1>Title: {data.title}</h1>
            <p>Price: $ {data.price}</p>
            <p>Description: {data.description}</p>
            <Link to={`/people/edit/${data._id}`}>Edit</Link>
            <br/>
            <button onClick={ backHomeHandler } >Back</button>
        </div>
    )
}
    
export default Detail;


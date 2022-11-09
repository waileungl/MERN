import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
    
const PersonList = props => {
    const { removeFromDom, people } = props;

    const deleteHandler = id => {
        axios.delete(`http://localhost:8000/api/people/${id}`)
        .then(res => {
            removeFromDom(id)
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            {people.map( (data, i) =>
                <p key={i}>
                    <Link to={`/people/${data._id}`} style={{ marginRight:"20px" }} >{data.title}</Link>
                    <button onClick={ e => deleteHandler(data._id) }>Delete</button>
                </p>
            )}
        </div>
    )
}
    
export default PersonList;


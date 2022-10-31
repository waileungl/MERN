import React, { useState } from "react";

const Userform = props => {
    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmpassword, setconfirmpassword] = useState("");

    return(
        <>
        <div>
            <label for>First Name</label>
            <input type="text" onChange={ (e) => setFirstname(e.target.value) }  />
        </div>
        <div>
            <label for>Last Name</label>
            <input type="text" onChange={ (e) => setLastname(e.target.value) }  />
        </div>
        <div>
            <label for>Email</label>
            <input type="email" onChange={ (e) => setEmail(e.target.value) }  />
        </div>
        <div>
            <label for>Password</label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) }  />
        </div>
        <div>
            <label for>Confirm Password</label>
            <input type="password" onChange={ (e) => setconfirmpassword(e.target.value) }  />
        </div>
        <h1>Your Form Data</h1>
        <div>
            First Name: { firstname }
        </div>
        <div>
            Last Name: { lastname }
        </div>
        <div>
            Email: { email }
        </div>
        <div>
            Password: { password }
        </div>
        <div>
            Confirm Password: { confirmpassword }
        </div>
        </>
    )
}


export default Userform;

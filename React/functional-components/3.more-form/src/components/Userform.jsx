import React, { useState } from "react";

const Userform = props => {
    const[firstNameError, setfirstNameError] = useState("");
    const[FirstName, setFirstName] = useState("");

    const[lastNameError, setlastNameError] = useState("");
    const[LastName, setLastName] = useState("");

    const[EmaillError, setEmaillError] = useState("");
    const[Email, setEmail] = useState("");

    const[passwordError, setpasswordError] = useState("");
    const[Password, setPassword] = useState("");

    const[confirmPasswordError, setConfirmPasswordError] = useState("");
    const[ConfirmPassword, setConfirmPassword] = useState("");

    const handleData = (e, title) => {
        if(title === "First Name"){
            setFirstName(e.target.value)
            e.target.value.length < 2 && e.target.value.length > 0 ?
                setfirstNameError(`${title} must not less than 2 characters!`):
                setfirstNameError("");
        }
        if(title === "Last Name"){
            setLastName(e.target.value)
            e.target.value.length < 2 && e.target.value.length > 0 ?
                setlastNameError(`${title} must not less than 2 characters!`):
                setlastNameError("");
        } 
        if(title === "Email"){
            setEmail(e.target.value)
            e.target.value.length < 5 && e.target.value.length > 0 ?
                setEmaillError(`${title} must not less than 5 characters!`):
                setEmaillError("");
        }
        if(title === "Password"){
            setPassword(e.target.value)
            e.target.value.length < 8 && e.target.value.length > 0 ?
                setpasswordError(`${title} must not less than 8 characters!`):
                setpasswordError("");
        }
        if(title === "Confirm Password"){
            setConfirmPassword(e.target.value)
            e.target.value !== Password?
                setConfirmPasswordError(`Password must be match!`):
                setConfirmPasswordError("");
        }
    }
    return(
        <>
        <div>
            <label>First Name: </label>
            <input type="text" onChange={ e => handleData(e, "First Name") }  />
            { 
                firstNameError?
                <p style={{ color:'red' }}>{ firstNameError }</p>:
                ''
            }
            <br />
            <label>Last Name: </label>
            <input type="text" onChange={ e => handleData(e, "Last Name") }  />
            { 
                lastNameError?
                <p style={{ color:'red' }}>{ lastNameError }</p>:
                ''
            }
            <br />
            <label>Email: </label>
            <input type="email" onChange={ e => handleData(e, "Email") }  />
            { 
                EmaillError?
                <p style={{ color:'red' }}>{ EmaillError }</p>:
                ''
            }
            <br />
            <label>Password: </label>
            <input type="password" onChange={ e => handleData(e, "Password") }  />
            { 
                passwordError?
                <p style={{ color:'red' }}>{ passwordError }</p>:
                ''
            }
            <br />
            <label>Confirm Password: </label>
            <input type="password" onChange={ e => handleData(e, "Confirm Password") }  />
            { 
                confirmPasswordError?
                <p style={{ color:'red' }}>{ confirmPasswordError }</p>:
                ''
            }
        </div>
        </>
    )
}


export default Userform;

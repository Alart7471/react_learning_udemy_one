import React, { useState } from "react";



export default function FormTest() {

    const [formEmail, setFormEmail] = useState('')
    const [formPassword, setFormPassword] = useState('')
    
    function sendDate(event) {
        event.preventDefault()
    
        //sending data http request..
    }
    
    return (
        <form onSubmit={sendDate}>
            <p>{formEmail} : {formPassword}</p>
            <input 
            type="text"
            placeholder="Email"
            onChange={(e) => {
                setFormEmail(e.target.value)
            }}
            value = {formEmail}
            />
            <input 
            type="password"
            placeholder="Password"
            onChange={(e) => {
                setFormPassword(e.target.value)
            }}
            value = {formPassword}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
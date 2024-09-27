import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Aboba(props){
    const [message, setMessage] = useState("Hi")
    const [message2, setMessage2] = useState("Hi2")
    
    useEffect(() => {
        
        setTimeout(() => {
            setMessage2(Math.random().toString())
            console.log("2 UPDATING")
            
        },1000)
    },[])
    
    setTimeout(() => {
        setMessage(Math.random().toString())
        console.log("UPDATING")
    
    },1000)

    return (
        <div>
            <span>{message2} {message}</span>
        </div>
    )
}

root.render(
    <>
        <Aboba message="aboba"/>
        <App />
    </>
  );
  
import React, { useState } from "react";

export default function ConditionalTest() {
    const [showMessage, setShowMessage] = useState(false);
    
    function click() {
        setShowMessage(!showMessage);
    }

    let message

    if(showMessage) {
        message = <Message />
    }
    
    return (
        <div>
            {/* {showMessage && <HelloModalWindow />} */}
            <button onClick={click}>Show</button>
            {message}
            {/* or */}
            {showMessage ? message : null}
            {/* or */}
            {showMessage && <Message />}
        </div>
    );
}

function Message() {
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}
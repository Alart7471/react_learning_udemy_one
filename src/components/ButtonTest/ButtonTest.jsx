import React, { useState } from 'react'




export default function ButtonTest() {
    const [clicks, setClick] = useState(0)
    
    function onClickTest(){
        setClick(clicks + 1)
    }
    return (
       <>
        <button onClick={onClickTest}>Клик: {clicks}</button>
       </>
    )
}


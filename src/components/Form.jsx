import React, { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

const Form = () => {

    const [name, setName] = useState("");
    const [showText, setShowText] = useState(false);

    return (
        <div>
        <div>
            <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => setShowText(!showText)}>Submit</button>
        </div>
        <div>
        {showText && <ReactTypingEffect text={`Hello ${name}!`}/>}
        </div>
        </div>
    );
}



export default Form;

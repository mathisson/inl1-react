import React, { useState } from "react";
import ReactTypingEffect from "react-typing-effect";

const Form = () => {
  const [name, setName] = useState("");
  const [showText, setShowText] = useState(false);
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();


  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div><button onClick={() => setShowText(!showText)}>Submit</button></div>
      <div>{showText && <ReactTypingEffect text={`Hello ${name}! you're message "${message}" has been saved.`} />}</div>
    </div>
  );
};

export default Form;

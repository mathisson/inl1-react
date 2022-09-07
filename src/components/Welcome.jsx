import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Welcome = () => {
  return (
    <div>
      <h1>
        <ReactTypingEffect text={"Welcome to my website"} speed={250} />
      </h1>
      <p>Currently it's nothing special but it might be someday.</p>
    </div>
  );
};

export default Welcome;

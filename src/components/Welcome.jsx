import React from "react";
import ReactTypingEffect from "react-typing-effect";

const Welcome = () => {
  return (
    <div>
      <h1>
        <ReactTypingEffect text={"Welcome to my website"} speed={250} />
      </h1>
    </div>
  );
};

export default Welcome;

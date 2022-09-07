import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onClickCounter = () => {
    setCounter((count) => count + 1);
  };

  return (
    <div>
      <div>
        <button className="Counter" onClick={onClickCounter}>
          {" "}
          {counter}{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;

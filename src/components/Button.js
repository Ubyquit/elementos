import React from "react";
import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  function darClic() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={darClic}>Contador {count}!</button>
    </div>
  );
};

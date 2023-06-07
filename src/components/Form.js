import React, { useState } from "react";

export const Form = () => {
    
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("0");
  const ageAsNumber = Number(age);
  return (
    <div>
      <div>
        <label>Nombre: </label>
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div>
        <label>Edad: </label>
        <input value={age} onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div>
        <button onClick={() => setAge(ageAsNumber + 10)}>
            Agregarle 10 años más!
        </button>
      </div>
      <div>
        {firstName !== "" && <p>tu nombre es {firstName}.</p>}
      </div>
      <div>
       {ageAsNumber > 0 && <p>tu edad es {ageAsNumber}.</p>}
      </div>
    </div>
  );
};

import React, { useState } from "react";

const Child = ({ todos }) => {
  const [hiddenButtons, setHiddenButtons] = useState([]);

  const handleComplete = (index) => {
    setHiddenButtons([...hiddenButtons, index]); // Store the index of the hidden button
  };

  return (
    <div>
      <h1>Child Component</h1>
      <ul>
        {todos.map((value, index) => (
          <div
            key={index}
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <li>{value}</li>
            {!hiddenButtons.includes(index) && (
              <button onClick={() => handleComplete(index)}>Complete</button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Child;

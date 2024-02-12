import React from "react";
import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const inputPlayerName = useRef();
  const [currentPlayerName, setCurrentPlayerName] = useState("");

  const handleClick = () => {
    setCurrentPlayerName(inputPlayerName.current.value);
    inputPlayerName.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {currentPlayerName || "unknown entity"}</h2>
      <p>
        <input ref={inputPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

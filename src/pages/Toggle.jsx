import { useState } from "react";
import "../styles/Toggle.css";
export default function Toggle() {
  const [lightMode, setLightMode] = useState("true");

  function handleToggle() {
    setLightMode((prevMode) => {
      const newMode = !prevMode;

      if (newMode) {
        document.body.classList.add("light-mode");
      } else {
        document.body.classList.remove("light-mode");
      }
      console.log(lightMode);
      return newMode;
    });
  }

  return (
    <div onClick={handleToggle} className="toggle-container">
      <div className="toggle"></div>
    </div>
  );
}

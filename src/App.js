import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <h3 data-testid="counter">{count}</h3>
      <button
        data-testid="minus-button"
        disabled={disabled}
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
      <button
        data-testid="plus-button"
        disabled={disabled}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <div>
        <button
          style={{ backgroundColor: "blue" }}
          data-testid="on/off-button"
          onClick={() => setDisabled((prev) => !prev)}
        ></button>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevState) => {
      return prevState - 1;
    });
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <>
      <h1>Counter: {count}</h1>
      <div className="btn-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

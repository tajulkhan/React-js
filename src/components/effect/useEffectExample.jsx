import { useEffect } from "react";
import { useState } from "react";
export default function UseEffectExample() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const handleIncrement1 = () => {
    setCount1((prevState) => {
      return prevState + 1;
    });
  };

  const handleDecrement2 = () => {
    setCount2((prevState) => {
      return prevState + 1;
    });
  };
  useEffect(() => {
    console.log("use effect");
  }, [count1, count2]);
  return (
    <>
      <div>useEffectExample</div>
      <div className="btn-group">
        <h1>Counter: {count1}</h1>
        <button onClick={handleIncrement1}>Increment</button>
        <br />
        <h1>Counter: {count2}</h1>
        <button onClick={handleDecrement2}>Decrement</button>
      </div>
    </>
  );
}

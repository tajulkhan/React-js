import { useState, useEffect, useCallback } from "react";

export default function ButtonOnClick() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  //   const handleClick = () => {
  //     setCount((prev) => prev + 1);
  //   };
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  useEffect(() => {
    console.log("handle click function reference change");
  }, [handleClick]);
  return (
    <>
      <h1>useCallBack hooks</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>increment counter</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Type something"
      />
      <p>Text: {text}</p>
    </>
  );
}

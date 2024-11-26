import { useState, useEffect } from "react";
export default function Timer() {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  return (
    <>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click me
      </button>
      <br />
      {toggle && <ShowComponent />}
    </>
  );
}

function ShowComponent() {
  useEffect(() => {
    const taskOne = setInterval(() => {
      console.log("timer start");
    }, 1000);

    return () => {
      clearInterval(taskOne);
      console.log("timer stop");
    };
  }, []);

  return <h4>Timer is enabled</h4>;
}

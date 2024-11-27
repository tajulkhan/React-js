import { useEffect, useRef, useState } from "react";
export default function Login() {
  const refEmail = useRef(null);
  const refPassword = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(refEmail, refPassword);
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const emailAdd = refEmail.current.value;
    const passwordAdd = refPassword.current.value;
    setError("");
    if (!emailAdd) {
      setError("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailAdd)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!passwordAdd) {
      setError("Password is required.");
      return;
    }
    setLoading(false);
    console.log("Email: ", emailAdd, "Password: ", passwordAdd);
    refEmail.current.value = "";
    refPassword.current.value = "";
  };
  return (
    <>
    <div className="login-card">
      <h3>Log in</h3>
      {error && <div className="error">{error}</div>}
       {/* Un Controlled inputs */}
      <form onSubmit={handleSubmit}>
        <div className="field-row">
          <label htmlFor="email">Email</label> <br />
          <input type="email" ref={refEmail} /> <br />
        </div>
        <div className="field-row">
          <label htmlFor="password">Password</label> <br />
          <input type="password" ref={refPassword} /> <br />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    {loading ? (<div></div>) : (<div>Welcome home</div>)}
    </>
  );
}
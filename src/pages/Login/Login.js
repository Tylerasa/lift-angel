import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
const Login = () => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
  const handleSubmit = () => {
      
  };

  return (
    <div className="wrapper">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
          type="text"
        />
        <br />
        <input
          onChange={e => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <br />
        <button className="wrapper-button">login</button>
      </form>
    </div>
  );
};

export default Login;

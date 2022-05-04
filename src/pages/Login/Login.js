import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { setUserPassword } from "../../redux/userSlice";
import "./styles.css";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    var data = {
      email,
      password,
      username
    };

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/login`,
      data: data
    };

    axios(config)
      .then(function(response) {
        console.log(response.data);
        if (response.status === 200) {
          localStorage.setItem("hep_token", response.data.jwt);
          dispatch(setUserPassword(password));
          navigate("/main");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
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
          onChange={e => setEmail(e.target.value)}
          placeholder="email"
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

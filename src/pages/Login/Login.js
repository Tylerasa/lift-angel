import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BallSpinner } from "react-spinners-kit";

import { useNavigate } from "react-router-dom";
import { setUserPassword } from "../../redux/userSlice";
import "./styles.css";
const Login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
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
          setLoading(false);
        } else {
          console.log(response.data.code);
          setError(response.data.code);
          setLoading(false);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(
    () => {
      if (!username || !password || !email) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    },
    [username, password, email]
  );

  return (
    <div className="wrapper">
      <p className="title">login</p>

      <span className="error">
        {error}
      </span>
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
        <button disabled={disabled} className="wrapper-button">
          {loading ? <BallSpinner color="#fff" /> : "login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

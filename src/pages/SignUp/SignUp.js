import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
const SignUp = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [group, setGroup] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState(null);
  const [prPhone, setPrphone] = useState(null);
  const [scphone, setScphone] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [oldPassword, setOldPassword] = useState(null);
  const [createdBy, setCreatedBy] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    var data = {
      group,
      username,
      first_name: firstName,
      last_name: lastName,
      date_of_birth: dob,
      gender,
      email,
      national_id: nationalId,
      primary_phone: prPhone,
      secondary_phone: scphone,
      photo_url: photo,
      old_pwd: oldPassword,
      created_by: createdBy,
      password
    };

    var config = {
      method: "post",
      url: process.env.REACT_APP_BASE_URL,
      data: data
    };

    axios(config)
      .then(function(response) {
        console.log(response.data);
        console.log(response.status);
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  useEffect(() => {});
  return (
    <div className="login-wrapper">
      <form onSubmit={e => handleSubmit(e)}>
        <div className="grid-line">
          <input
            onChange={e => setGroup(e.target.value)}
            placeholder="Group"
            type="text"
          />
          <input
            onChange={e => setFirstName(e.target.value)}
            placeholder="First Name"
            type="text"
          />
        </div>
        <div className="grid-line">
          <input
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name"
            type="text"
          />{" "}
          <input
            onChange={e => setDob(e.target.value)}
            placeholder="Date of Birth"
            type="date"
          />
        </div>
        <div className="grid-line">
          <input
            onChange={e => setGender(e.target.value)}
            placeholder="Gender"
            type="text"
          />{" "}
          <input
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />{" "}
        </div>
        <div className="grid-line">
          <input
            onChange={e => setNationalId(e.target.value)}
            placeholder="National ID"
            type="text"
          />{" "}
          <input
            onChange={e => setPrphone(e.target.value)}
            placeholder="Primary Phone"
            type="tel"
          />{" "}
        </div>
        <div className="grid-line">
          <input
            onChange={e => setScphone(e.target.value)}
            placeholder="Secondary Phone"
            type="tel"
          />{" "}
          <input
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            type="text"
          />{" "}
        </div>
        <div className="grid-line">
          <input
            onChange={e => setPhoto(e.target.value)}
            placeholder="Photo Url"
            type="url"
          />
          <input
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
          />
        </div>
        <div className="grid-line">
          <input
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            type="password"
          />
          <input
            onChange={e => setCreatedBy(e.target.value)}
            placeholder="Created By"
            type="text"
          />
        </div>
        <button className="login-button">login</button>
      </form>
    </div>
  );
};

export default SignUp;

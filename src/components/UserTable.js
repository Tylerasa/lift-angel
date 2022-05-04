import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
const UserTable = ({ user }) => {
  const oldPassword = useSelector(state => state.user.password);
  console.log(oldPassword);
  const [password, setPassword] = useState(null);
  const handleSubmit = e => {
    e.preventDefault();
    var data = {
      old_pwd: oldPassword,
      password,
      username: user.username
    };
    console.log(data);
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/update/${user.id}`,
      data
    };
    axios(config)
      .then(function(response) {
        console.log(response.data);
        console.log(response.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <div className="table-wrapper">
      <table className="activity-table">
        <thead className="activity-table-header">
          <tr>
            <th>ID</th>
            <th>Usename</th>
            <th>Email</th>
            <th>Password Changed</th>
            <th>Change Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {user.id}
            </td>
            <td>
              {user.username}
            </td>
            <td>
              {user.email}
            </td>
            <td>
              {user.default_pwd_changed ? "True" : "False"}
            </td>
            <td>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={e => setPassword(e.target.value)}
                  style={{ backgroundColor: "#d3d3d3" }}
                  type="text"
                />
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;

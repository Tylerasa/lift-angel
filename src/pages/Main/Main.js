import axios from "axios";
import React, { useEffect, useState } from "react";
import UserTable from "../../components/UserTable";

const Main = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    var data = {
      token: localStorage.getItem("hep_token")
    };
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/user`,
      data
    };

    axios(config)
      .then(function(response) {
        console.log(response.data);
        setUser(response.data);
        console.log(response.status);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {user && <UserTable user={user} />}
    </div>
  );
};

export default Main;

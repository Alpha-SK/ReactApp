import React, { useState, useEffect } from "react";
import axios from "axios";
import FormApp from "./FormApp";

const URL = "https://nodemongo-38yg.onrender.com/loadusers";

const AxiosDemo = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        setUserData(data);
      });
  }, []);

  return (
    <div>
      <FormApp />
      <hr />
      {userData.map((user) => (
        <div key={user._id}>
          {user._id} -- {user.name} -- {user.email}
        </div>
      ))}
    </div>
  );
};

export default AxiosDemo;

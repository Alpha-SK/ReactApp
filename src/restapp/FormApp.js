import React, { useState } from "react";
import axios from "axios";

function FormApp() {
  const [_id, setUid] = useState("");
  const [name, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const addUser = async (e) => {
    e.preventDefault();
    const newUser = { _id, name, email, password };
    try {
      setUsers((prevUsers) => [...prevUsers, newUser]);
      const response = await axios.post(
        "https://nodemongo-38yg.onrender.com/adduser",
        newUser
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding user:", error);
      // Handle the error, e.g., show a user-friendly error message
    }
    console.log(users);
  };

  return (
    <div>
      <p>User Registration</p>
      <form onSubmit={addUser}>
        User ID:
        <input
          type="number"
          value={_id}
          onChange={(e) => setUid(Number(e.target.value))}
        />
        Username:
        <input
          type="text"
          value={name}
          onChange={(e) => setUname(e.target.value)}
        />
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default FormApp;

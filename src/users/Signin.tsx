import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User } from '../users/Backend.ts';
import * as client from '../users/Backend.ts';
import React from "react";

export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/");
  };
  return (
    <div>
      <h1>Signin</h1>
      <label htmlFor="username">Username</label>
      <input
      id="username"
        type="text"
        className="form-control"
        style={{ width: "200px", margin: "10px" }}
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <br></br>
      <label htmlFor="password">Password</label>
      <input
      id="password"
        type="text"
        className="form-control"
        style={{ width: "200px", margin: "10px" }}
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <br></br>
      <button id= "Signin" className="btn btn-primary ms-2" 
      style={{ width: "100px" }}
      onClick={signin}>
        {" "}
        Signin{" "}
      </button>
        <br></br>
        
    </div>
  );
}

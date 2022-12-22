import React, { useState } from "react";
import { postContact } from "../api/authuser";
import { useNavigate } from "react-router";
import "./Signin.css";
const Signin = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (value) => {
    await postContact(value);
    navigate("/login");
  };
  return (
    <>
      <div>
        <main>
          <div className="row">
            <div className="colm-form">
              <div className="form-container">
                <input
                  type="text"
                  placeholder="Email address "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <input
                  type="text"
                  placeholder="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <button
                  className="btn-login"
                  onClick={() => handleSubmit({ name, email, password })}
                >
                  Register
                </button>
                <br />
                <button className="btn-new" onClick={() => navigate("/login")}>
                  login Account
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Signin;

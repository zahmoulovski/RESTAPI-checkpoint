import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signin.css";
import { useNavigate } from "react-router";
import axios from "axios";
const Register = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (values) => {
    try {
      const res = await axios.post(`http://localhost:2804/auth/signin`, values);
      await localStorage.setItem("token", res.data.token);
      navigate("/app/Profile");
    } catch (err) {
      handleShow();
      console.log("you're wrong");
    }
  };

  return (
    <div className="bbody">
      <Modal
        keyboard
        show={show}
        onHide={handleClose}
        className="ModalContainer col-12"
      >
        <Modal.Header closeButton className=" px-5">
          <Modal.Title className="text-primary fw-normal">
            mot de passe ou email erroné
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className=" px-5">
          <Button
            variant="outline-primary"
            className="col-6"
            onClick={handleClose}
          >
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
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
              <button
                className="btn-login"
                onClick={() => onSubmit({ email, password })}
              >
                Login
              </button>
              <br />
              <button className="btn-new" onClick={() => navigate("/login")}>
                Register
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;

import React from "react";
import "./UpdateForm.css";
import { useNavigate } from "react-router";

const UpdateForm = () => {
  const navigate = useNavigate();
  const update = () => {
    navigate("/app/Profile");
  };
  return (
    <div className="body">
      <div className="container">
        <form id="contactus">
          <h3>Update Profil form</h3>

          <fieldset>
            <input
              placeholder="name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input placeholder="Password" type="tel" tabindex="3" required />
          </fieldset>

          <fieldset>
            <button
              name="button"
              type="submit"
              id="contactus-submit"
              onClick={() => update()}
            >
              Update Now
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;

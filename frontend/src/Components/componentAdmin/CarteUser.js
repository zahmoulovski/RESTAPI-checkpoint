import React from "react";
import { useNavigate } from "react-router-dom";
import "./CarteUser.css";

const CarteUser = ({ user }) => {
  const navigate = useNavigate();
  const navigateprofil = () => {
    navigate(`/update/${user._id}`);
  };
  return (
    <div>
      <ul class="tilesWrap">
        <li>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.role}</p>
          <button onClick={navigateprofil}>Update</button>
        </li>
      </ul>
    </div>
  );
};

export default CarteUser;

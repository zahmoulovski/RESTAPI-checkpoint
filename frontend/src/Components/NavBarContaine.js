import React from "react";
import "./navbar.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBarContaine = ({ logout, account }) => {
  return (
    <div>
      <nav class="navMenu">
        {account.role === "admin" ? (
          <>
            <a href="/">Home</a>

            <a href="/">Work</a>
          </>
        ) : (
          <>
            <a href="/">Home</a>
            <a href="/">Blog</a>
            <a href="/">Work</a>
            <a href="/">About</a>
          </>
        )}
        <Button variant="outline-secondary" onClick={() => logout()}>
          Logout
        </Button>{" "}
        <div class="dot"></div>
      </nav>
    </div>
  );
};

export default NavBarContaine;

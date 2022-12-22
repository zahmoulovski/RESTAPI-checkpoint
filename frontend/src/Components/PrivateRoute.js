import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { fetchAccount } from "../api/authuser";
import { useDispatch, useSelector } from "react-redux";
import { setAccount } from "../store/accountSlice";
import Admin from "./Admin";
import Signin from "./Signin";
import NavBarContaine from "./NavBarContaine";
import UserProfile from "./User/UserProfile";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const getAccount = async () => {
    const data = await fetchAccount();
    dispatch(setAccount(data));
  };
  useEffect(() => {
    getAccount();
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const logout = (token) => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const token = localStorage.getItem("token");

  return (
    <div>
      {" "}
      <div>
        {token ? (
          <>
            <NavBarContaine account={account} logout={logout} />
            <br />
            <br />
            <br />
            {account.role === "admin" ? (
              <Admin account={account} />
            ) : (
              <UserProfile account={account} />
            )}
          </>
        ) : (
          <Signin />
        )}
      </div>
    </div>
  );
};

export default PrivateRoute;

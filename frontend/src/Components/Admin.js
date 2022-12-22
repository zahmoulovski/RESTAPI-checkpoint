import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts } from "../api/utilisateurs";
import { setContacts } from "../store/userSlice";
import CarteUser from "./componentAdmin/CarteUser";

const Admin = ({ account }) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const getContact = async () => {
    const data = await fetchAccounts();
    dispatch(setContacts(data));
  };
  useEffect(() => {
    getContact();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Welcome to {account.name}</h1>
      l'admin ynejem yfeskh les utilistauer
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {users.map((e) => (
          <CarteUser user={e} />
        ))}
      </div>
    </div>
  );
};

export default Admin;

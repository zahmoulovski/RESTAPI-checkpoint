import axios from "axios";

export const fetchAccounts = async () => {
  const { data } = await axios.get(`http://localhost:2804/auth/alluser`);
  return data;
};
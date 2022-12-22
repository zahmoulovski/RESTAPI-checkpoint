import axios from "axios";

export const fetchAccount = async () => {
  const token = localStorage.getItem("token");
  const { data } = await axios.get(`http://localhost:2804/auth/uraccount`, {
    headers: { Authorization: token },
  });
  return data;
};
export const postContact = async (values) => {
  // eslint-disable-next-line
  const addingContact = await axios.post(`http://localhost:2804/auth/singup`, {
    ...values,
  });
};

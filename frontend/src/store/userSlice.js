import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const userSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: uuidv4(),
      name: "zahmoulovski",
      age: 30,
      email: "zahmoulovski@gmail.com",
    },
  ],
  reducers: {
    setContacts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContacts } = userSlice.actions;

export default userSlice.reducer;

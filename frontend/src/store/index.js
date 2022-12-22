import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "./accountSlice";
import userSlice from "./userSlice";
export default configureStore({
  reducer: {
    account: accountSlice,
    user: userSlice,
  },
});

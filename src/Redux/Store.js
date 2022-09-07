import { configureStore } from "@reduxjs/toolkit";
import PlaceBid from "./Reducers/PlaceBid";
import SignIn from "./Reducers/SigninModal";

export default configureStore({
  reducer: {
    PlaceBid,
    SignInState: SignIn,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import PlaceBid from "./Reducers/PlaceBid";
import ResetPassword from "./Reducers/ResetPassword.js";
import SignIn from "./Reducers/SigninModal";
import WalletDropDown from "./Reducers/WalletDropDown";

export default configureStore({
  reducer: {
    PlaceBid,
    SignInState: SignIn,
    WalletDropDown: WalletDropDown,
    ResetPassword: ResetPassword,
  },
});

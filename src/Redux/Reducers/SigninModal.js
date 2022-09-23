import { createSlice } from "@reduxjs/toolkit";

export const SignIn = createSlice({
  name: "counter",
  initialState: {
    show: false,
    showWithdraw: false,
  },
  reducers: {
    showSigninModal: (state, action) => {
      console.log(action, "<<<<<");
      // state = { ...state, ...action.payload };

      state.show = action.payload;

      // console.log(action.payload, state, "<<<<action");
    },
    showWithdrawFun: (state, action) => {
      state.showWithdraw = action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { showSigninModal, showWithdrawFun } = SignIn.actions;

export default SignIn.reducer;

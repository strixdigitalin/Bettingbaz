import { createSlice } from "@reduxjs/toolkit";

export const WalletDropDown = createSlice({
  name: "counter",
  initialState: {
    show: false,
  },
  reducers: {
    openWallet: (state, action) => {
      // console.log(state, "<<<<<");
      // state = { ...state, ...action.payload };
      state.show = action.payload;

      // console.log(action.payload, state, "<<<<action");
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { openWallet } = WalletDropDown.actions;

export default WalletDropDown.reducer;

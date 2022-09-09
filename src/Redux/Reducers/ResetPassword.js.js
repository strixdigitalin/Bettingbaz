import { createSlice } from "@reduxjs/toolkit";

export const ResetPassword = createSlice({
  name: "counter",
  initialState: {
    show: false,
  },
  reducers: {
    showResetPasswordModal: (state, action) => {
      // console.log(state, "<<<<<");
      // state = { ...state, ...action.payload };
      state.show = action.payload;

      // console.log(action.payload, state, "<<<<action");
    },
  },
});

// Action creators are generated for each case reducer function
export const { showResetPasswordModal } = ResetPassword.actions;

export default ResetPassword.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const LiveMatch = createSlice({
  name: "counter",
  initialState: {
    liveMatch: [],
  },
  reducers: {
    LiveMAtchList: (state, action) => {
      state.liveMatch = action.payload;
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { LiveMAtchList } = LiveMatch.actions;

export default LiveMatch.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const PlaceBid = createSlice({
  name: "counter",
  initialState: {
    show: false,
    team: null,
    odds: null,
    matchId: null,
  },
  reducers: {
    placeBid: (state, action) => {
      console.log(state, action.payload);
    },
    showModal: (state, action) => {
      // console.log(state, "<<<<<");
      // state = { ...state, ...action.payload };
      state.show = action.payload.show;
      state.team = action.payload.team;
      state.odds = action.payload.odds;
      state.matchId = action.payload.matchId;
      // console.log(action.payload, state, "<<<<action");
    },
    hideModal: (state, action) => {
      // console.log(state, "<<<<<");
      // state = { ...state, ...action.payload };
      state.show = false;
      state.team = null;
      state.odds = null;
      state.matchId = null;
      // console.log(action.payload, state, "<<<<action");
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { placeBid, showModal, hideModal } = PlaceBid.actions;

export default PlaceBid.reducer;

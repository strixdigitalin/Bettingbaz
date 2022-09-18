import { createSlice } from "@reduxjs/toolkit";

export const LiveMatch = createSlice({
  name: "counter",
  initialState: {
    // these are having date from live match and then livematch by id 0th pos.
    liveMatch: [],
    cricketLiveMatch: [],
    basketballLiveMatch: [],
    tennisLiveMatch: [],

    // ----Use below state only---these are having data from live match
    footballAllLiveMatch: [],
    cricketAllLiveMatch: [],
    tennisAllLiveMatch: [],
    basketBallLiveMatch:[]
  },
  reducers: {
    // for football
    LiveMAtchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.liveMatch = action.payload;
    },

    CricketLiveMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.cricketLiveMatch = action.payload;
    },
    BasketBallMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.basketballLiveMatch = action.payload;
    },
    TennisMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.tennisLiveMatch = action.payload;
    },

    // ----Use these functions only as suggested in initializing state comment
    FootballAllLiveMatchFun: (state, action) => {
      state.footballAllLiveMatch = action.payload;
    },
    cricketAllLiveMatchFun: (state, action) => {
      state.cricketAllLiveMatch = action.payload;
    },
    TennisAllLiveMatchFun: (state, action) => {
      state.tennisAllLiveMatch = action.payload;
    },
    BasketBallLiveMatchFun:(state,action)=>{
      state.basketBallLiveMatch=action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  LiveMAtchList,
  CricketLiveMatchList,
  BasketBallMatchList,
  TennisMatchList,
  FootballAllLiveMatchFun,
  cricketAllLiveMatchFun,
  TennisAllLiveMatchFun,
  BasketBallLiveMatchFun
} = LiveMatch.actions;

export default LiveMatch.reducer;

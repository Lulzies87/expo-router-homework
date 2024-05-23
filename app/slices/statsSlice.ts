import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalGames: 0,
  totalXWins: 0,
  totalYWins: 0,
};

const statsSlice = createSlice({
  name: "stats",
  initialState,
  reducers: {
    countGame: (state) => {
      state.totalGames++;
    },
    countXWin: (state) => {
      state.totalXWins++;
    },
    countYWin: (state) => {
      state.totalYWins++;
    },
  },
});

export const { countGame, countXWin, countYWin } = statsSlice.actions;

export const statsReducer = statsSlice.reducer;

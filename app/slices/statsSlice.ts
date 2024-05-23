import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalGames: 0,
  totalXWins: 0,
  totalOWins: 0,
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
    countOWin: (state) => {
      state.totalOWins++;
    },
  },
});

export const { countGame, countXWin, countOWin } = statsSlice.actions;

export const statsReducer = statsSlice.reducer;

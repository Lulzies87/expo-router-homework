import { configureStore } from "@reduxjs/toolkit";
import { statsReducer } from "./slices/statsSlice";

const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
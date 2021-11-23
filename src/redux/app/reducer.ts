import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface state {
  theme: "light" | "dark";
  primary: string;
  secondary: string;
}

const initialState: state = {
  theme: "light",
  primary: "black",
  secondary: "white",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onChangeMode: (state) => {
      return { ...state, theme: state.theme === "light" ? "dark" : "light", primary: state.secondary, secondary: state.primary };
    },
  },
});

export const { onChangeMode } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;

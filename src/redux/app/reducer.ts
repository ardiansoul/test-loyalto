import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getTheme } from "./services";

interface state {
  theme: "light" | "dark" | string;
  primary: string;
  secondary: string;
}

const initialState: state = {
  theme: "light",
  primary: "black",
  secondary: "white",
};

export const loadTheme = createAsyncThunk(
  "app/loadTheme",
  async () => {
    const response = await getTheme()
    return response
  }
)

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onChangeMode: (state, action: PayloadAction<string>) => {
        return { ...state, theme: state.theme === "light" ? action.payload : "light", primary: state.secondary, secondary: state.primary };
    },
    onChangePrimary: (state, action: PayloadAction<string>) => {
        return { ...state, primary:  action.payload};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadTheme.fulfilled, (state, action) => {
      return {...state, theme: state.theme === "light" ? action.payload : "light"}
    })
  }
});

export const { onChangeMode, onChangePrimary } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;

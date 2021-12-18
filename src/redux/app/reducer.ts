import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchGenres, fetchMovie, fetchMovies, getTheme } from "./services";

interface Movies {
  dates: {
    maximum: string,
    minimum: string
  };
  page: number;
  results: Array<any>;
  total_pages: number;
  total_results: number;
}
interface state {
  theme: "light" | "dark" | string;
  primary: string;
  secondary: string;
  primaryBackground: string;
  sidebar: boolean;
  genres: Array<any>;
  movies: Movies;
  movie: any;
}

const initialState: state = {
  theme: "light",
  primary: "black",
  secondary: "white",
  primaryBackground: "yellow-400",
  sidebar: true,
  genres: [],
  movie: {

  },
  movies: {
    dates: {
      maximum: '',
      minimum: "",
    },
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  }
};

export const loadTheme = createAsyncThunk(
  "app/loadTheme",
  async () => {
    const response = await getTheme()
    return response
  }
)

export const getGenres = createAsyncThunk(
  "app/getGenres",
  async () => {
    const response = await fetchGenres()
    return response
  }
)

export const getMovies = createAsyncThunk(
  "app/getMovies",
  async (page: number) => {
    const response = await fetchMovies(page)
    return response
  }
)
export const getMovie = createAsyncThunk(
  "app/getMovie",
  async (id: string | undefined) => {
    const response = await fetchMovie(id)
    return response
  }
)

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {


    onShowSidebar: (state, action: PayloadAction<boolean>) => {
      return { ...state, sidebar: action.payload }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadTheme.fulfilled, (state, action) => {
      return { ...state, theme: state.theme === "light" ? action.payload : "light" }
    })
    builder.addCase(getGenres.fulfilled, (state, action) => {
      return { ...state, genres: action.payload }
    })
    builder.addCase(getMovies.fulfilled, (state, action) => {
      return { ...state, movies: action.payload }
    })
    builder.addCase(getMovie.fulfilled, (state, action) => {
      return { ...state, movie: action.payload }
    })
  }
});

export const { onShowSidebar } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;

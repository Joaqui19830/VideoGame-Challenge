import { createSlice } from "@reduxjs/toolkit";

export const generosSlice = createSlice({
  name: "Generos",
  initialState: {
    generos: [],
  },
  reducers: {
    setGeneros: (state, actions) => {
      state.generos = actions.payload.generos;
    },
  },
});

export const { starGenerosLoading, setGeneros } = generosSlice.actions;

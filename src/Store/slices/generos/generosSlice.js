import {createSlice} from '@reduxjs/toolkit';
import { videogamesSlice } from '../videogames/videogamesSlice';

export const generosSlice = createSlice({
    name: 'Generos',
    initialState:{
        isLoadingGeneros: true,
        generos: [],
    },
    reducers:{
        starGenerosLoading:(state, _) => {
            state.isLoadingGeneros = true;
        },
        setGeneros:(state, actions) => {
            state.generos = actions.payload.generos;

            state.isLoadingGeneros = false;
        }
    }
});

export const {
    starGenerosLoading,
    setGeneros
} = videogamesSlice.actions;
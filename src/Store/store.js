import { configureStore } from '@reduxjs/toolkit'
import { generosSlice } from './slices/generos/generosSlice'
import { videogamesSlice } from './slices/videogames/videogamesSlice'

export const store = configureStore({
  reducer: {
    videgamesReducer: videogamesSlice.reducer,
    generosReducer: generosSlice.reducer
  },
})
import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: "favorite",
    initialState: {
        movies: []
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies = state.movies.concat(action.payload)
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
        }
    }
});

export const { addMovie, removeMovie } = favoritesSlice.actions;
export default favoritesSlice.reducer;

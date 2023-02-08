import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const allPokemonsSlice = createSlice({
		name: 'allpokemons',
    initialState: [],
    reducers: {
        
    }
})

export const {  } = allPokemonsSlice.actions;

export default allPokemonsSlice.reducer;
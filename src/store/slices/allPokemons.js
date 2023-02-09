import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './loading';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const allPokemonsSlice = createSlice({
    name: 'allpokemons',
    initialState: [],
    reducers: {
        getAllPokemons: (state, action) => {
            const products = action.payload;
            return products;
        }
    }
})

export const getAllPokemonsThunk = () => dispatch => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then( res => dispatch( getAllPokemons( res.data.results )))
        .finally(() => dispatch( setLoading('') ))
}

export const { getAllPokemons } = allPokemonsSlice.actions;

export default allPokemonsSlice.reducer;
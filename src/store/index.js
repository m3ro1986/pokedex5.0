import { configureStore } from '@reduxjs/toolkit'
import allPokemonsSlice from './slices/allPokemons'

export default configureStore({
  reducer: {
        allPokemons: allPokemonsSlice,
	}
})

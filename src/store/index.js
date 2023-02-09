import { configureStore } from '@reduxjs/toolkit'
import allPokemonsSlice from './slices/allPokemons'
import loadingSlice from './slices/loading'

export default configureStore({
  reducer: {
        allPokemons: allPokemonsSlice,
        loading: loadingSlice
	}
})

import { configureStore } from '@reduxjs/toolkit'
import allPokemonsSlice from './slices/allPokemons'
import loadingSlice from './slices/loading'
import getUserName from './slices/userName'

export default configureStore({
  reducer: {
        userName: getUserName,
        allPokemons: allPokemonsSlice,
        loading: loadingSlice
	}
})

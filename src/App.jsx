import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Pokedex from './pages/Pokedex'

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login /> } />
                <Route path='/pokedex' element={ <Pokedex /> } />
            </Routes>    
        </HashRouter>
    )
}

export default App

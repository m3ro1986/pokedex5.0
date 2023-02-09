import '../styles/pokedex.css';
import React from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';

const Pokedex = () => {

    const userName = useSelector( state => state.userName );
    const allPokemons = useSelector( state => state.allPokemons );

    console.log( allPokemons )

    return (
        <div className='pokedex-box ligth'>
            <nav>
                Pokedex welcome { userName }
            </nav>
            <main>
                {
                    allPokemons.map( e => (
                        <Pokecard key={ e.url } url={ e.url }/>
                    ))
                }
            </main>
        </div>
    );
};

export default Pokedex;
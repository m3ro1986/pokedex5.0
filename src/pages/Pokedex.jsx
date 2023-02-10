import '../styles/pokedex.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';

const Pokedex = () => {

    const userName = useSelector( state => state.userName );
    const allPokemons = useSelector( state => state.allPokemons );
    const [ reveal, setReveal ] = useState('hide')

    const showSide = () => {
        if ( reveal === 'hide') {
            setReveal('show')
        } else {
            setReveal('hide')
        }
    }

    return (
        <div className='pokedex-box ligth'>
            <nav>
                <p> Welcome { userName }, here you can find your favorite POKEMON!!!</p>
                <i onClick={ showSide } className='bx bxs-left-arrow'></i>
            </nav>
            <main>
                {
                    allPokemons.map( e => (
                        <Pokecard key={ e.url } url={ e.url }/>
                    ))
                }
            </main>
            <div className={`sideBox ${ reveal }`}>
                <i onClick={ showSide } class='bx bx-x'></i>
            </div>
        </div>
    );
};

export default Pokedex;
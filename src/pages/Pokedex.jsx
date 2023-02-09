import '../styles/pokedex.css';
import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {

    const userName = useSelector( state => state.userName );

    return (
        <div className='pokedex-box ligth'>
            <nav>
                Pokedex welcome { userName}
            </nav>
        </div>
    );
};

export default Pokedex;
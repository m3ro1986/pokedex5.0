import '../styles/pokedex.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Pokecard from '../components/Pokecard';
import axios from 'axios';

const Pokedex = () => {

    const userName = useSelector(state => state.userName);
    const allPokemons = useSelector(state => state.allPokemons);
    const [poketypes, setPoketypes] = useState([]);
    const [typeName, settypeName] = useState('');
    const [reveal, setReveal] = useState('hide');
    const getPoketypes = () => { axios.get('https://pokeapi.co/api/v2/type/').then(res => setPoketypes(res.data.results)); };
    const getPoketype = (path) => { axios.get(path).then(res => setPokemons(res.data.pokemon)) };

    const showSide = () => {
        if (reveal === 'hide') {
            setReveal('show')
        } else {
            setReveal('hide')
        }
    }

    const filterTypes = (e) => {
        if (e.target.value === 'all') {
            getPokemons();
        } else {
            getPoketype(e.target.value);
        };
        setPage(0);
     };

    return (
        <div className='pokedex-box ligth'>
            <nav>
                <p> Welcome {userName}, here you can find your favorite POKEMON!!!</p>
                <i onClick={showSide} className='bx bxs-left-arrow'></i>
            </nav>
            <main>
                {
                    allPokemons.map(e => (
                        <Pokecard key={e.url} url={e.url} />
                    ))
                }
            </main>
            <div className={`sideBox ${reveal}`}>
                <i onClick={showSide} className='bx bx-x'></i>
                <div>
                    <input type="text" />
                    <button>search</button>
                </div>
                <select className='filter-box' onChange={filterTypes}>
                    <option value="all"> All pokemons </option>
                    {
                        poketypes.map(e => (
                            <option key={e.name} value={e.url}>
                                {e.name}
                            </option>
                        ))
                    }
                </select>

            </div>
        </div>
    );
};

export default Pokedex;
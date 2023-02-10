import '../styles/pokecard.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Pokecard = ({ url }) => {

    const dispatch = useDispatch();
    const [ pokemon, setPokemon ] = useState({});
    const [ type, setType ] = useState('');

    const getPokemon = () => {
        axios.get(url).then(res => setPokemon(res.data))
    }

    useEffect(() => {
        getPokemon()
    }, [])

    console.log ( pokemon.types?.type?.name )

    return (
        <div className= {`pokecardBox ${ pokemon.types?.[0].type?.name }`}>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <h4> {pokemon.name}</h4>
        </div>
    );
};

export default Pokecard;
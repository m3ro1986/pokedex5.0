import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const Pokecard = ( {url} ) => {

    const dispatch = useDispatch();
    const [ pokemon, setPokemon ] = useState({});

    const getPokemon = () => {
        axios.get(url).then( res => setPokemon(res.data))
    }

    useEffect( () => {
        getPokemon()
    },[])

    return (
        <div>
            <h3> { pokemon.name }</h3>
            <img src={ pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default Pokecard;
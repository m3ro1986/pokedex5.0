import '../styles/login.css';
import buttonsvg from '../assets/buttonsvg.png';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemonsThunk } from '../store/slices/allPokemons';
import { setLoading } from '../store/slices/loading';
import { getUserName } from '../store/slices/userName';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ scale, setScale ] = useState('');
    const [theName, setTheName] = useState('');
    const loading = useSelector( state => state.loading );

    const goPokemons = () => {
        if ( theName !== ''){
        dispatch(getUserName(theName))
        dispatch(setLoading('loading'))
        setTimeout( () => dispatch( getAllPokemonsThunk() ),1000);
        setTimeout( () => setScale( 'scale'), 1000);
        setTimeout( () => navigate('/pokedex'), 2000 ) ;
        } else {
            alert('give me a name')
        }
    }

    return (
        <div className='loginBox'>
            <div className={`loginBox-login ${ scale }`}>
                <div className='shineLigth'>
                    <div className={`shineLigth-big ${loading}`}></div>
                    <div className='shineligth-small'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className='loginBox-main'>
                    <div className='loginBox-main_welcome'>
                        <div className='ligth-small'>
                            <div></div>
                            <div></div>
                        </div>
                        <div className='loginBox-main_message'>
                            <p style={{ margin: '10px' }} className='welcome-message'> 
                                <span>Hello trainer!</span>
                                <span>Give me your</span>
                                <span>name.</span> 
                            </p>
                            <input
                                type="text"
                                value={theName}
                                onChange={e => setTheName(e.target.value)}
                                autoFocus
                            />
                        </div>
                        <div className='button-box'>
                            <button onClick={ goPokemons }> Go </button>
                            <img src={buttonsvg} alt="" style={{ width: 90 }} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
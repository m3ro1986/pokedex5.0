import '../styles/login.css';
import buttonsvg from '../assets/buttonsvg.png';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [ theName, setTheName ] = useState('');

    return (
        <div className='loginBox'>
            <div className='loginBox-login'>
                <div className='shineLigth'>
                    <div className='shineLigth-big'></div>
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
                            <p style={{ margin: '10px'}}>Hello trainer!!! give me your name to start?</p>
                            <input
                                 type="text"
                                 value={ theName }
                                 onChange={ e => setTheName( e.target.value )}
                            />
                        </div>
                        <div className='button-box'>
                            <button onClick={ () => navigate('/pokedex')}> Go </button>
                            <img src={ buttonsvg } alt="" style={{ width:90 }}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
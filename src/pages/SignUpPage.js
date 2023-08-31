import React, { useState } from 'react';
import styled from 'styled-components';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../utils/firebase-config';
import Header from '../components/Header';
import BackgroundImage from '../components/BackgroundImage';


const SignUpPage = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Container>
            <BackgroundImage />
            <div className='content'>
                <Header login />
                <div className='body'>
                    <div className='text'>
                        <h1>Unlimited movies, Tv shows and more </h1>
                        <h4>watch anywhere, Cancel Anytime</h4>
                        <h6>Ready to watch? Enter your email to create or restart membership</h6>
                    </div>
                    <div className='form'>
                        {
                            showPassword ? (
                                <input type='password' placeholder='password' name='password' />
                            ) : <input type='email' placeholder='email address' name='email' />
                        }

                        {
                            !showPassword ? (
                                <button onClick={() => setShowPassword(true)}>Get Started</button>
                            ) : <button>Sign Up</button>
                        }



                    </div>
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    .content {
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.79);
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        
        /* Updated styles for .body */
        .body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        
        /* Updated styles for .text */
        .text {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            font-size: 1.2rem;
            margin-top: -10rem;
            color: white;
        }
        h1{
            padding: 0 20rem;
        }
        h4{
            margin-top: -1.5rem;
        }
        h6{
            margin-top: -1.5rem;
        }
    }
    .form {
        display: grid;
        width: 40%;
        margin-right: 35%;
        margin-left: auto;
        grid-template-columns: ${({ showPassword }) => showPassword ? '1fr 1fr' : '2fr 1fr'};
        input{
            color:black;
            padding: 0.8rem;
            font-size: 1.2rem;
            width: 30rem;
            &:focus{
                outline: none;
            }
        }
        button{
            padding: 0.5rem 1rem;
            background-color: red;
            border: none;
            cursor: pointer;
            color: white;
            font-size: 1.05rem;
            width: 10rem;
        }
    }
`;

export default SignUpPage;

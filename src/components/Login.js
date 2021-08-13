import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import login from '../features/userSlice';
import { auth } from '../firebase/firebase';

function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ profilePic, setProfilePic ] = useState('');

/* useDispatch lets me push user info into the userSLice: */
    const dispatch = useDispatch();

/* This function allows users to register if no account: */
    const register = () => {
        if(!name) {
            return alert("Please enter a full name!");
        };

    /* firestore uses the createUserwithEmailAndPassword func. to store it in backend */
    /* .updateProfile updates the user object */
        auth.createUserWithEmailAndPassword(email, password).then( (userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic,
            })
            .then( () => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
            
        }).catch( (error) => alert(error) );
    };

/* This function allows users to log-in: */
    const loginToApp = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL,
                })
            );
        }).catch( (error) => alert(error));

    };

    return (
        <div className="login">
            
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt=""/>

            <form>
                <input type="text" placeholder="Full name (required if registering)" value={name} onChange={ event => setName(event.target.value) }/>

                <input type="text" placeholder="Profile pic URL (optional)" value={profilePic} onChange={ event => setProfilePic(event.target.value) }/>

                <input type="email" placeholder="Email" value={email} onChange={ event => setEmail(event.target.value) } />

                <input type="password" placeholder="Password" value={password} onChange={ event => setPassword(event.target.value)} />

                <button type="submit" onClick={loginToApp}>Sign In</button>

            </form>

            <p>Not a member?{' '} 
                <span className="login__register" onClick={register} >Register Now</span>
            </p>

        </div>
    );
};

export default Login;
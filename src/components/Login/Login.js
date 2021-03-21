import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import facebookLogo from '../../images/facebook-logo.png';
import googleLogo from '../../images/google-logo.png';
import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        margin: '30px 38%'
    },
});

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    const classes = useStyles();

    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
    });

    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }


    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (event) => {
        let isFromValid = true;
        if (event.target.name === 'email') {
            isFromValid = /^\S+@\S+\.\S+/.test(event.target.value);
        }
        if (event.target.name === 'password') {
            const isPasswordValid = event.target.value.length > 6;
            const isPasswordNumber = /\d{1}/.test(event.target.value);
            isFromValid = isPasswordValid && isPasswordNumber;
        }
        if (isFromValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmitSignIn = (event) => {
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);

                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }
        console.log(event);
       // event.preventDefault();
    }
    
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography >
                        <form className="login-form" onSubmit={handleSubmitSignIn(onSubmit)} >
                            <h3>Create an account</h3>
                            {newUser && < input name="name" ref={register({ required: true, maxLength: 20 })} onBlur={handleBlur} placeholder="Name" />}
                            {errors.name && <span className="error">Name is required</span>}

                            < input name="email" type="email" ref={register({ required: true })} onBlur={handleBlur} placeholder="Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            < input name="password" type="password" ref={register({ required: true })} onBlur={handleBlur} placeholder="Password" />
                            {errors.password && <span className="error">Password is required</span>}

                            < input name="confirmPassword" type="password" ref={register({ required: true })} onBlur={handleBlur} placeholder="Confirm Password" />
                            {errors.confirmPassword && <span className="error">Password is required</span>}

                            <Button variant="contained" id='button' type="submit">
                            {newUser ? 'Create an account' : 'Login'}
                            </Button>
                                   
                            <p id="haveAccount">Already have an account? <span><Link>login</Link></span></p>
                        </form>
                        <p style={{ color: 'red' }}>{user.error}</p>
                        {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                    </Typography>
                </CardContent>
            </Card>

            <div className="signIn-google-facebook">
                <Button onClick={fbSignIn} variant="contained" >
                    <span><img id="facebookLogo" src={facebookLogo} alt="" /></span> Continue with facebook
                </Button>
                <br />
                {
                    user.isSignedIn ? <button onClick={signOut}>Sign out</button>
                        : <Button onClick={googleSignIn} variant="contained" >
                            <span><img id="googleLogo" src={googleLogo} alt="" /></span> Continue with google
                            </Button>

                }
            </div>
        </div>
    );
};

export default Login;



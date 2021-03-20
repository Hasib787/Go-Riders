import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth:400,
        margin: '30px 35%'
    },
});

const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));
    const classes = useStyles();
    const handleGoogleSignIn = () => {

    }
    return (
        <div>
            <Card className={classes.root}>
                    <CardContent>
                        <Typography >
                            <form className="login-form" onSubmit={handleSubmit(onSubmit)} >
                                <h3>Create an account</h3>
                                < input name="name" ref={register({ required: true, maxLength: 20 })} placeholder="Name" />
                                {errors.name && <span className="error">Name is required</span>}

                                < input name="email" type="email" ref={register({ required: true })} placeholder="Email" />
                                {errors.email && <span className="error">Email is required</span>}

                                < input name="password" type="password" ref={register({ required: true })} placeholder="Password" />
                                {errors.password && <span className="error">Password is required</span>}

                                < input name="confirmPassword" type="password" ref={register({ required: true })} placeholder="Confirm Password" />
                                {errors.confirmPassword && <span className="error">Password is required</span>}

                                <button id='button' type="submit">Create an account</button>

                                <p id="haveAccount">Already have an account? <span><Link>login</Link></span></p>
                            </form>
                        </Typography>
                    </CardContent>
            </Card>

                <div>
                    <button>Continue with facebook</button>
                    <br/>
                    <button>Continue with google</button>
                </div>
        </div>
    );
};

export default Login;



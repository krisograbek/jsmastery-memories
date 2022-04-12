import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Input from './Input';
import Icon from './icon';
import dotenv from 'dotenv';
import { signin, signup } from '../../actions/auth';

// [4:06:00]

const Auth = () => {
  const classes = useStyles();
  const [showPassord, setShowPassord] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, history));
    } else {
      dispatch(signin(formData, history));
    }
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.getAttribute('name')]: e.target.value });
  }

  const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup)

  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  // toggling
  const handleShowPassword = () => setShowPassord((prevShowPassword) => !prevShowPassword);

  const googleSuccess = async (res) => {
    // res gives us access to information
    // the optional chaining operator ?. 
    // not throwing an error when res is undefined
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      // we're dispatching an action from here?
      dispatch({ type: 'AUTH', payload: { result, token } });
      // navigate to the main page
      history.push('/');

    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = () => {
    console.log("Google Sign In failed")
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="firstName" value={formData.firstName} label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" value={formData.lastName} label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" value={formData.email} label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" value={formData.password} label="Password" handleChange={handleChange} type={showPassord ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" value={formData.confirmPassword} label="Repeat Passoword" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId={clientId}
            // render how the button is going to look like
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy='single_host_origin'
          />
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
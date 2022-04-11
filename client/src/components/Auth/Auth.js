import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import Input from './Input';



const Auth = () => {
  const classes = useStyles();
  const [showPassord, setShowPassord] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const handleSubmit = () => { }
  const handleChange = () => { }
  const switchMode = () => setIsSignup((prevIsSignup) => !prevIsSignup)
  // toggling
  const handleShowPassword = () => setShowPassord((prevShowPassword) => !prevShowPassword);
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
                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassord ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassord" label="Repeat Passoword" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
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
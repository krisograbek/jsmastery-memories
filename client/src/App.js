import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import { useDispatch } from 'react-redux';

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.png';
import useStyles from './styles';
import { getPosts } from "./actions/posts";

const App = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  // useDispatch() hook allows us to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // get all posts
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit" >
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow >
    </Container >
  );
}

export default App;

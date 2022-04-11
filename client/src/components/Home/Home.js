import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from "../../actions/posts";
import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(0);
  // useDispatch() hook allows us to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // get all posts
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
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
  )
}

export default Home
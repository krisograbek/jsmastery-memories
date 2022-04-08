import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Post from './Post/Post'
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  // use selector with a callback that holds
  // the state of our store
  // posts comes from combine reducers
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems='stretch' spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  )
}

export default Posts
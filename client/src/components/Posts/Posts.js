import React from 'react'
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import Post from './Post/Post'
import useStyles from './styles';

const Posts = () => {
  const classes = useStyles();
  // use selector with a callback that holds
  // the state of our store
  // posts comes from combine reducers
  const posts = useSelector((state) => state.posts);
  console.log('posts', posts)
  return (
    <>
      {!posts.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems='stretch' spacing={3}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  )
}

export default Posts
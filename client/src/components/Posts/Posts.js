import React from 'react'
import { useSelector } from 'react-redux';

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
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  )
}

export default Posts
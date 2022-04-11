import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getPosts } from "./actions/posts";
import Auth from './components/Auth/Auth';
import Form from "./components/Form/Form";
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import useStyles from './styles';


const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" component={Auth} />
        </Switch>
      </Container >
    </BrowserRouter>
  );
}

export default App;

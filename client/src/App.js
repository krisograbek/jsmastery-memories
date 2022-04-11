import Container from '@material-ui/core/Container';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import Navbar from "./components/Navbar/Navbar";
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

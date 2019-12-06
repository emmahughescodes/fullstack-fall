import React, { Component } from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './Components/AppBar';
import { withStyles } from '@material-ui/core/styles';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
import Main from "./Components/Main";
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  render () {
    const { classes, history } = this.props;
    
    const { books } = this.state;
    return (
      <div className='App'>
        <AppBar />

        <Router>
          <Switch>
            <Route
              path="/book/:id"
              // provide the Component to the Router
            />
            <Route
              exact
              path="/create"
            />
            <Route
              exact
              path="/"
              component={Main}
            />
            <Route
              exact
              path="*"
              component={ () => {
                return <div>you're lost emma!!!!!!</div>
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

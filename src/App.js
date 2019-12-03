import React, { Component } from 'react';
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from './Components/AppBar';
import Services from './Components/Services';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {BrowserRouter as Router,Route, Redirect,Switch} from 'react-router-dom';
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
}));

class App extends Component {
  render () {
    return (
      <div className='App'>
        <AppBar />

        <Services />
      </div>
    );
  }
}

export default App;

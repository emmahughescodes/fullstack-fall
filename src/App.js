import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import BookIcon from '@material-ui/icons/Book';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Main from "./Main";
import Form from "./Form";
import Book from './Book';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[800] : theme.palette.grey[200],
  },
}));

export default function App() { 
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="relative">
      <Toolbar>
        <IconButton aria-label="more info">
          <BookIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap>
          Library
        </Typography>
      </Toolbar>
    </AppBar>
    <Router>
      <Switch>
        <Route
          path="/book/:id"
          // provide the Component to the Router
          component={Book}
        />
        <Route
          exact
          path="/create"
          component={Form}
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
            return <div>Sorry, but you are lost!</div>
          }}
        />
      </Switch>
    </Router>
    <footer className={classes.footer}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Having fun isn't hard...
        </Typography>
      </footer>
    </div>
    );
}

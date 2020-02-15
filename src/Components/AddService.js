import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);


const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(8, 0, 6),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  buttonField: {
    marginTop: theme.spacing(1),
  },
}));

export default function AddService(props) {
  const classes = useStyles();
  const [serviceName, updateServiceName] = useState('');
  const [location, updateLocation] = useState('');
  const [description, updateDescription] = useState('');
  const [participantCount, updateParticipantCount] = useState('');

  async function createBook() {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          serviceName, 
          location,
          description, 
          participantCount, 
        })
      });
      const resp = await response.json();
      console.log(resp);
    } catch (ex) {
      console.log(ex, "ex");
    }
  }

  console.log(props);
  return (
    <Container className={classes.content} maxWidth="md">
      <form>
        <div>
          <Typography component="h6" variant="h6" align="left" color="textPrimary">
            Add a Service
          </Typography>
        </div>
        <div>
        <TextField
            id="standard-multiline-flexible"
            label="Service Name"
            multiline
            rowsMax="2"
            className={classes.textField}
            margin="normal"
            value={serviceName}
            onChange={(e) => { updateServiceName(e.target.value); }}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Location"
            multiline
            rowsMax="2"
            className={classes.textField}
            margin="normal"
            value={location}
            onChange={(e) => { updateLocation(e.target.value); }}
          />
          
          <TextField
          id="standard-number"
          label="Number of Participants"
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
          onChange={(e) => {updateParticipantCount(e.target.value);}}
          value={participantCount}
        />
        </div>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="description"
            multiline
            rowsMax="4"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={description}
            onChange={(e) => { updateDescription(e.target.value); }}
          />
        </div>
        <div>
          <Button
              className={classes.buttonField}
              size="small"
              variant="outlined"
              color="primary"
              onClick={() => {
                createBook();
                props.history.push("/");
              }}
            >
            Add Service
          </Button>
        </div>
      </form>
    </Container>
  );
} 

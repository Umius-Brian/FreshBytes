/* eslint-disable */
import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import '../stylesheets/app.css';
import logo from '../assets/NeighborsTableIconClear.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        FreshBytes Codesmith
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();

  const [zip, setZip] = useState(''); //take the 'zip' and pass it as props to 'productList'
  
  const handleSubmit = e => {
    // e.preventDefault();
    props.getProducts(zip);
}

  return (
    <Container component="main" maxWidth="xs">
      <img className="table" src={logo} alt="Logo" />
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Welcome to Neighbor's Table!
        </Typography>
        <br></br>
        <br></br>
          <Link to="/new" style={{textDecoration:"none"}}>
            <Button
              underline="none"
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
           
            >
              🥦 Sell Your Produce 🥦
            </Button>
          </Link>
        <div className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Zipcode"
            value={zip}
            onChange={e => setZip(e.target.value)}
            autoFocus
          />
          <br></br>
          <br></br>
          <Link to="/products" style={{textDecoration:"none"}}>
            <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            role="img"
            onClick={handleSubmit}
          >
            ❤️ Search Your Local Farmers ❤️
            </Button>
          </Link>
        </div>  
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
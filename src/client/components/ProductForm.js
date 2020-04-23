/* eslint-disable */

import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import '../stylesheets/app.css';

class ProductForm extends React.Component {
  state = {
    submitted: false
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addProduct(this.state)
    this.setState({submitted: true})
  }

  render() {
    if(this.state.submitted === true) return <Redirect to='/main'/>
    else return (
      <div>
        <nav style={styles.nav}>
          <div>
            <Link to='/main' style={styles.navLinkHome}>
              <img src="../../../public/assets/NeighborsTableIcon.png" height="200"></img>
            </Link>
          </div>
        </nav>


        <div className="inspiration"></div>
        <div style={styles.formContainer} className="formContainer">
          <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <div style={styles.subFormDiv}>
              <h3 style={styles.h3}>Seller Description</h3>
              <div style={styles.inputDiv}>
                <TextField id="standard-name" label="Name" name='name'>Name</TextField>
              </div>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Store Name" name='about'>Store Name</TextField>
              </div>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Phone" name='phone'>Phone Number</TextField>
              </div>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Zipcode" name='zip'>Zipcode</TextField>
              </div>
            </div> 
            <div style={styles.subFormDiv}>
              <h3 style={styles.h3}>Product Info</h3>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Product" name='item_name'>Product</TextField>
              </div>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Price" name='price'>Price</TextField>
              </div>
              <div style={styles.inputDiv}>
              <TextField id="standard-name" label="Description" name='description'>Description</TextField>
              </div>
            </div>
            <div style={styles.buttonDiv}>
                <button style={styles.button} type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>



      
    )
  }
}

export default ProductForm;

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    // width: '10rem',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    
  },
  input: {
    minWidth: '200px',
    fontSize: '1rem',
    marginLeft: '2rem',
    color: 'grey',
  },
  button: {
    minWidth: '150px',
    fontSize: '1.2rem',
    fontWeight: '500',
    borderRadius: '5px',
    padding: '8px 16px',
    cursor: 'pointer',
    margin: '2.5rem',
    background:'#3F9E4D',
    color: 'aliceblue',
    opacity: '.9'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    color: '#EAEAEA',
    minHeight: '15vh',
    width: '100%',
    padding: '0 2rem',
    opacity: '.9',
    position: 'fixed',
  },
  navLinkHome: {
    fontFamily: 'Varela Round',
    fontSize: '2rem',
    color: '#EAEAEA',
    fontWeight: '900',
    textDecoration: 'none',
  },
  inputDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '.5rem'
  },
  subFormDiv: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12)',
    padding: '1rem',
    marginTop: '2rem',
    borderRadius: '8px',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    paddingBottom: '2rem',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'center',
  },
  h3: {
    textAlign: 'center',

  }
}


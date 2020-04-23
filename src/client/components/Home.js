/* eslint-disable */

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../../public/styles.css';

class Home extends React.Component {
  state = {
    submitted: false
  }
  
  //sets state of this component property to the name of the input field and grabs value of input field
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  
  //passing local state of this component to redux store through the getProducts action
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getProducts(this.state.zip)
    e.target.reset()
    this.setState({submitted: true})
  }

  render() {
    if(this.state.submitted === true) return <Redirect to='/products' />
    else return(
      <div style={styles.container}>
        <div style={styles.hero}>
        <div style={styles.callToAction}>
        <h1 style={styles.header}>Welcome to Neighbor's Table!</h1>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit} style={styles.form}>
          <input type="text" name='zip' placeholder='enter your zip' style={styles.input}/>
          <button type="submit" style={styles.button}>Search</button>
          <Link to="/new" ><button style={styles.button}>Sell Your Produce</button></Link>
        </form>
        </div>
        </div>
      </div>
    )
  }
}

export default Home;

const styles = {
  header: {
    color:'green'
  },
  hero:{
  backgroundImage: 'url(' + 'https://images.unsplash.com/uploads/141247613151541c06062/c15fb37d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' + ')',
  height: '100vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent:'center',
  alignItems:'center',
  
  },
  callToAction:{
    background: '#EAEAEA',
    opacity :'.95',
    minWidth: '600px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    // backdropFilter: 'blur(0.8)'
    // // width: '100%',
    // // height:'100%',
    // position:'absolute',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '1.2rem'

  },
  input: {
    minWidth: '300px',
    fontSize: '1.5rem',
    padding: '.8rem',
    color: 'gray'
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
  header: {
    fontFamily: 'Varela Round',
    fontSize: '2.3rem',
    color: '#3F9E4D',
    fontWeight: '900',
    opacity: '.9'
  }
}

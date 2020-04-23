import React from 'react';
import '../stylesheets/app.css';
import SignIn from "../components/SignIn.js";

function Login(props) {
  return (
    <div className="hero">
      <SignIn getProducts={props.getProducts}/>
      {/* <div className="g-signin2" data-onsuccess="onSignIn" src="https://apis.google.com/js/platform.js"></div> */}
    </div>
  )
}

export default Login;
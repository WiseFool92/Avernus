import React, { Component } from 'react';
import './LoginStyle.css';
import { Link } from 'react-router-dom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach(val => {
    val == null && (valid = false)
  });
    
  return valid;
};

// const subBtn = {
//   backgroundColor: '#519e8a',
//   color: '#fff',
//   border: '2px solid #fff',
//   width: '25%',
//   margin: 'auto',
//   padding: '8px 0px',
//   fontSize: '1rem',
//   letterSpacing: '1px',
// }

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      // submissionResponseText: "",
      formErrors: {
        email: '',
        password: '',
      }
    };
  }

  // postRequest(requestOptions){
  //   return fetch('/login', requestOptions).then(token => {return token})
  // }

  handleSubmit = e => {
    e.preventDefault();
    
    // const returningUser = {
    //   email: this.state.email,
    //   password: this.state.password
    // }

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({returningUser})
      // };
      
      // const userToken = this.postRequest(requestOptions)


      // RESPONSE FROM SERVER GOES HERE
      // userToken.then(function(result){
      //   switch(result.statusText) {
      //     case "OK":
      //       this.setState({submissionResponseText: "Login Successful!\nRedirecting to Dashboard."})
      //       setTimeout(window.location.href="/Dashboard", 2000);
      //       break;
      //     case "email":
      //       this.setState({submissionResponseText: "That email is not registered."})
      //       break;
      //     case 'password':
      //       this.setState({submissionResponseText: "That password is incorrect"})
      //       break;
      //     default:
      //       this.setState({submissionResponseText: "FORM INVALID - Catastrophic meltdown, run for your lives!"})
      //   }
      // })
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = this.state.formErrors;

    switch(name) {
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? '' 
          : 'invalid email addresss';
        break;
      case 'password':
        formErrors.password = 
          value.length < 6 ? 'minimum 6 characters required' : '';
        break;
      default:
        break;
    }

    this.setState({formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    var visible;
    if (this.state.submissionResponseText !== '') {
      visible = 'inline-block'  
    }
    else {
      visible = 'none'  
    }

    // const submissionResponseDiv = {
    //   position: 'relative',
    //   width: '100%',
    //   height: 'fitContent',
    //   textAlign: 'center',
    //   display: visible,
    //   color: 'ivory',
    //   padding: '1rem',
    //   fontWeight: 'lighter',
    //   fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif'
    // }

  return (
    <>
    <div className='regWrapper'>
      <div className='form-regWrapper'>
      {/* <div style={submissionResponseDiv} id="SubmissionResponseDiv">
          <p>{this.state.submissionResponseText}</p>
          <button style={subBtn} onClick={() => this.setState({submissionResponseText: ''})}>Ok</button>
        </div> */}
        <h1 style={{color: 'white'}}>Login</h1>
        <form className='registration-form' onSubmit={this.handleSubmit} noValidate>
          <div className='email'>
            <label htmlform='email'>Email</label>
            <input 
              className={formErrors.email.length > 0 ? 'error' : null} 
              placeholder='Email' 
              type='email'
              name='email' 
              onChange={this.handleChange}
              noValidate 
            />
            {formErrors.email.length > 0 && (
              <span className='errorMessage'>{formErrors.email}</span>
            )}
          </div>
          <div className='password'>
            <label htmlform='password'>Password</label>
            <input  
              className={formErrors.password.length > 0 ? 'error' : null}
              placeholder='Password'
              type='password' 
              name='password' 
              onChange={this.handleChange}
              noValidate 
            />
            {formErrors.password.length > 0 && (
              <span className='errorMessage'>{formErrors.password}</span>
            )}
          </div>
          <div className='createAccount'>
            <button type='submit'>Log Me In</button>
            <Link to="/loginForm">
                <small style={{color: "black"}}>Don't Have an Account?</small>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  )}
}

export default Login;


// Attempt to connect with firebase

// import React from "react";
// import firebase from 'firebase/app';

// function Login(){  
//   function doSignUp(event) {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
//       console.log('Successfully signed up!');
//     }).catch(function(error) {
//       console.log(error.message);
//     });
//   }

//   function doSignIn(event) {
//     event.preventDefault();
//     const email = event.target.signinEmail.value;
//     const password = event.target.signinPassword.value;
//     firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
//       console.log('Successfully signed in!');
//     }).catch(function(error) {
//       console.log(error.message);
//     });
//   }

//   function doSignOut() {
//     firebase.auth().signOut().then(function() {
//       console.log('Successfully signed out!');
//     }).catch(function(error) {
//       console.log(error.message);
//     });
//   }

//   return (
//     <>
//       <h1>Sign up</h1>
//       <form onSubmit={doSignUp}>
//         <input
//           type='text'
//           name='email'
//           placeholder='email' />
//         <input
//           type='password'
//           name='password'
//           placeholder='Password' />
//         <button type='submit'>Sign up</button>
//       </form>

//       <h1>Sign In</h1>
//       <form onSubmit={doSignIn}>
//         <input
//           type='text'
//           name='signinEmail'
//           placeholder='email' />
//         <input
//           type='password'
//           name='signinPassword'
//           placeholder='Password' />
//         <button type='submit'>Login</button>
//       </form>
//       <h1>Sign Out</h1>
//       <button onClick={doSignOut}>Log Out</button>
//     </>
//   );
// }

// export default Login;
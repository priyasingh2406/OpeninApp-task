import React, { useState } from 'react';
import './login.css';

import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import Dashboard from '../Dashboard/Dashboard';



const Login = ( ) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();
  const handleLoginSuccess = credentialResponse => {
    const details = jwt_decode(credentialResponse.credential);
    setIsLoggedIn(true);
    setShowLogin(false);
    <Dashboard details={details} />
    console.log(details);
    navigate('/dashboard')
  };

  return (
    <>
    <div className='left-side'>
        <h1>Board.</h1>
    </div>
    <div className='right-side'>
        <div className='right-div'>
        <h2>Sign In</h2>
        <h5 className='t1'>Sign in to your account</h5>
        <div className='GoogleOAuthProvider'>
        <button className='google-button'>
            {!isLoggedIn && (
              <GoogleOAuthProvider   clientId= '72991770536-mndpj2nd8uhr6potsk82367d92arc784.apps.googleusercontent.com'>
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />
              </GoogleOAuthProvider>
            )}
          </button>
        <button className='apple-button'><i class="ri-apple-fill" style={{marginRight: '12px'}} ></i>Sign in with Apple</button>
        </div>
        <div className='div-under'>
            <form >
                <label className='l1'>Email Address</label><br />
                <input className='i1' type='text' /><br />
                <label className='l1'>Password</label><br />
                <input className='i1' type='password'/>
                <h5 className='link' ><a>Forgot Password?</a></h5>
                <button className='submit-button'>SIGN IN</button>
            </form>
        </div>
        <h5 className='t2'>Don't have an account? <a className='link-register'>Register Here</a></h5>
        </div>
    </div>
    
    </>
  )
}

export default Login;
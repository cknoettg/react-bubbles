import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import "../styles.scss";

const Login = () => {
  //state
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const history = useHistory();

  //change handler
  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const logins = e => {
    e.preventDefault();
    AxiosWithAuth()
      .post(`http://localhost:5000/api/login`, credentials) ///api/login
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err => console.log(err));
    setCredentials({ username: '', password: '' });
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <form className='form' onSubmit={logins}>
        <h3>Login</h3>
        <label>Username</label>
        <input type='text' name='username' placeholder='Username' onChange={handleChange} value={credentials.username} />
        <label>Password</label>
        <input type='password' name='password' placeholder='Password' onChange={handleChange} value={credentials.password} />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
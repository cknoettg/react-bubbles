import React, { useState } from "react";
import AxiosWithAuth from '../utils/AxiosWithAuth';

const Login = () => {
  //state
  const [credentials, setCredentials] = useState({ username: '', password: '' });

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
    axios
      .post(`http://localhost:5000/api/login`, credentials)
      .then(res =>
        localStorage.setItem('token', res.data.payload))
      .catch(err => console.log(err));
    setCredentials({ username: '', password: '' });
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
    </>
  );
};

export default Login;

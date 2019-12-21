//React
import React, { useState } from 'react';
//Routing
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from './helpers/axiosWithAuth'


import './App.css';

function App() {
  const history = useHistory()
  const [loginInput, setLoginInput] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = ev => {
    ev.preventDefault()
    // axiosWithAuth().post('/', loginInput)
    //   .then( res => {
    //     localStorage.setItem('token', res.dataObject.token)

    //   })
    //   .catch( res => {

    //   })
    history.push('/postIt')
  }

  const handleInput = ev => {
    setLoginInput({ ...loginInput, [ev.target.name]: ev.target.value ]})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Post It!</h1>
        <p>It's an app that lets you store, edit, delete, and post strings to different api and retrieve/store responses!</p>

        <form onSubmit={handleSubmit}>
          <input
            placeholder='Username'
            name='username'
            value={loginInput.username}
            onChange={handleInput}
          />
          <input
            placeholder='Password'
            type='password'
            name='password'
            value={loginInput.password}
            onChange={handleInput}
          />
          <button type='submit'>Login</button>

        </form>
      </header>
    </div>
  );
}

export default App;

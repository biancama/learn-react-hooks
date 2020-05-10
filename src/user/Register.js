import React, { useState, useContext } from 'react'
import { StateContext } from '../context'
const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const {dispatch} = useContext(StateContext) 

    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGIN', username})  }}>
          <label htmlFor="register-username">Username:</label>
          <input type="text" name="register-username" id="register-username" value={username} onChange={e => setUsername(e.target.value)}/>
          <label htmlFor="register-password">Password:</label>
          <input type="password" name="register-password" id="register-password" value={password} onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="register-password-repeat">Repeat password:</label>
          <input type="password" name="register-password-repeat" id="register-password-repeat" value={repeatPassword} onChange={e => setRepeatPassword(e.target.value)}/>
          <input type="submit" value="Register" disabled={username.length === 0 || password.length === 0 || password !== repeatPassword}/>
        </form>
      )
}

export default Register
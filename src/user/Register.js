import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from '../context'
import { useResource } from 'react-request-hook'

const Register = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const {dispatch} = useContext(StateContext) 

    const [user, registerFun] = useResource((username, password) => ({
      url: '/users',
      method: 'post',
      data: {username, password}
    }))
    useEffect(() => {
      if (user && user.data) {
        dispatch({type: 'REGISTER', username: user.data.username})
      }
    }, [user])
    return (
        <form onSubmit={e => {e.preventDefault(); console.log(username); console.log(password); registerFun(username, password)}}>
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
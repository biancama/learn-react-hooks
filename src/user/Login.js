import React, { useState, useContext } from 'react'
import {StateContext} from '../context'


const Login = () => {
    const [username, setUsername] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
    const {dispatch} = useContext(StateContext) 

    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGIN', username}) }} >
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" value={username} onChange={handleUsername}/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="ogin-password" />
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    )
}

export default Login;
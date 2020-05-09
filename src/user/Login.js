import React, { useState } from 'react'


const Login = ({ dispatch }) => {
    const [username, setUsername] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
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
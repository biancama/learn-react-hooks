import React, { useState, useContext, useEffect } from 'react'
import {StateContext} from '../context'
import { useResource } from 'react-request-hook' 


const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleUsername = (e) => setUsername(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)
    const [loginFailed, setLoginFailed] = useState(false)
    const {dispatch} = useContext(StateContext) 

    const [user, setLogin] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({type: 'LOGIN', username: user.data[0].username}) 
            } else {
                setLoginFailed(true)
            }
            if (user && user.error) {
                setLoginFailed(true)
            }
        }
    }, [user])

    return (
        <form onSubmit={e => {e.preventDefault(); setLogin(username, password) }} >
            {loginFailed && <span style={{color: 'red'}}>Invalid username or password</span>}
            <label htmlFor="login-username">Username:</label>
            <input type="text" id="login-username" value={username} onChange={handleUsername}/>
            <label htmlFor="login-password">Password:</label>
            <input type="password" id="ogin-password" value={password} onChange={handlePassword}/>
            <input type="submit" value="Login" disabled={username.length === 0}/>
        </form>
    )
}

export default Login;
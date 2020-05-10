import React, { useContext } from 'react'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from '../context' 
const UserBar = () => {
    const { state } = useContext(StateContext)
    const { user } = state 
    if (user) {
        return (           
                <Logout />           
        ) 
    } else {
        return (
            <React.Fragment>
                <Login />
                <Register />
            </React.Fragment>
        )
    }
}

export default UserBar

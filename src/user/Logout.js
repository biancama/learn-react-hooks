import React, { useContext } from 'react'
import {StateContext} from '../context'

const Logout = () => {
    const {state, dispatch} = useContext(StateContext) 
    const {user} = state
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'}) }} >
            Logged is as: <b>{user}</b>
            <input type="submit" value="Logut" />
        </form>
    )

}

export default Logout;
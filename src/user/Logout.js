import React from 'react'

const logout = ({user, dispatch}) => {
    return (
        <form onSubmit={e => {e.preventDefault(); dispatch({type: 'LOGOUT'}) }} >
            Logged is as: <b>{user}</b>
            <input type="submit" value="Logut" />
        </form>
    )

}

export default logout;
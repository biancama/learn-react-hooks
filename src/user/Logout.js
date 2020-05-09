import React from 'react'

const logout = ({user, setUser}) => {
    return (
        <form onSubmit={e => {e.preventDefault(); setUser('')}} >
            Logged is as: <b>{user}</b>
            <input type="submit" value="Logut" />
        </form>
    )

}

export default logout;
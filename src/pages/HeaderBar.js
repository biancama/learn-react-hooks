import React, { useContext } from 'react'
import UserBar from '../user/userBar'
import CreatePost from '../post/CreatePost'
import Header from '../Header'
import { ThemeContext, StateContext } from '../context'

import ChangeTheme  from '../changeTheme'

export default function HeaderBar ({ setTheme }) {
    
    const theme = useContext(ThemeContext)
    const { state } = useContext(StateContext)
    const { user  } = state
  
 
    return (
        <div>
            <Header text='React Hooks Blog' />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <br />
        <React.Suspense fallback={"Loading..."}>
          <UserBar />
        </React.Suspense>
        <br />
      { user && <CreatePost /> }
        </div>
    )
}
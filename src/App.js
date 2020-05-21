import React, { useReducer, useEffect, useState } from 'react';
import UserBar from './user/userBar'
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'
import appReducers from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './context'
import ChangeTheme  from './changeTheme'
import { useResource } from 'react-request-hook'

function App() {
  
  const [state , dispatch ] = useReducer(appReducers, {user: '', posts: []})
  const { user, error } = state
  const [theme, setTheme] = useState({ 
    primaryColor: 'deepskyblue', 
    secondaryColor: 'coral'
  })
 
  useEffect(() =>{
    if (user) {
      document.title = `${user} - React hooks Blog`
    } else {
      document.title = `React hooks Blog`
    }
  }, [user])

  const [posts, getPosts] =  useResource(() => ({
    url: '/posts',
    method: 'get'
  }))

  useEffect(getPosts, [])
  

  useEffect(() => {
    if (posts && posts.error) {
      dispatch({type: 'POSTS_ERROR'})
    }
    if (posts && posts.data) {
      dispatch({type: 'FETCH_POSTS', posts: posts.data.reverse()})
    }
  }, [posts])

  return (
    <StateContext.Provider value={{state, dispatch}}>
      <ThemeContext.Provider value={theme}>
      <div style={{ padding: 8}}>     
        <Header text='React Hooks Blog' />
        <ChangeTheme theme={theme} setTheme={setTheme} />
        <br />
        <UserBar />
        <br />
      { user && <CreatePost /> }
        <br />
        <br />   
        {error && <b>{error}</b>}             
        <PostList />
            
      </div>
      </ThemeContext.Provider>
    </StateContext.Provider>

    )
}

export default App;

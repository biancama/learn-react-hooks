import React, { useReducer, useEffect, useState } from 'react';
import UserBar from './user/userBar'
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'
import appReducers from './reducers'
import Header from './Header'
import { ThemeContext, StateContext } from './context'
import ChangeTheme  from './changeTheme'


function App() {
  const defaultPosts = [
    {title: 'React Hook', author: 'Massimo', content: 'this is a test 01'},
    {title: 'the meaining of the world', author: 'Pippo Baudo', content: 'this is a test 04'},
  ];

  
  const [state , dispatch ] = useReducer(appReducers, {user: '', posts: defaultPosts})
  const { user } = state
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
        <PostList />
            
      </div>
      </ThemeContext.Provider>
    </StateContext.Provider>

    )
}

export default App;

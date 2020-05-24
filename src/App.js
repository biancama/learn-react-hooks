import React, { useReducer, useEffect, useState } from 'react';
import appReducers from './reducers'
import { ThemeContext, StateContext } from './context'
import HeaderBar from './pages/HeaderBar'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import { Router, View } from 'react-navi'
import { mount, route } from 'navi'


function App() {
  
  const routes = mount ({
    '/': route({ view: <HomePage />}),
    '/view/:id': route(req => {
      return { view: <PostPage id={req.params.id} />} 
    })
  })

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

 
  return (
    <StateContext.Provider value={{state, dispatch}}>
      <ThemeContext.Provider value={theme}>
        <Router routes ={routes} >
          <div style={{ padding: 8}}>     
            <HeaderBar setTheme={setTheme} />
            <br />
            <br />   
            <View />
                
          </div>
      </Router>
      </ThemeContext.Provider>
    </StateContext.Provider>

    )
}

export default App;

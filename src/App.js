import React, { useReducer, useEffect } from 'react';
import UserBar from './user/userBar'
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'
import appReducers from './reducers'

function App() {
  const defaultPosts = [
    {title: 'React Hook', author: 'Massimo', content: 'this is a test 01'},
    {title: 'the meaining of the world', author: 'Pippo Baudo', content: 'this is a test 04'},
  ];

  
  const [state , dispatch ] = useReducer(appReducers, {user: '', posts: defaultPosts})
  const { user, posts } = state
  
  useEffect(() =>{
    if (user) {
      document.title = `${user} - React hooks Blog`
    } else {
      document.title = `React hooks Blog`
    }
  }, [user])
  return (
    <React.Fragment>       
      <UserBar user={user} dispatch={dispatch} />
      <br />
     { user && <CreatePost user={user} posts={posts} dispatch={dispatch}/> }
      <br />
      <br />                
      <PostList posts={posts} />
           
    </React.Fragment>

      // // <Post title="this is a title" content="Super test" author="Massimo" />
      // // <CreatePost />
      // <PostList posts={posts} />
    )
}

export default App;

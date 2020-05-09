import React, {useState} from 'react';
import UserBar from './user/userBar'
import CreatePost from './post/CreatePost'
import PostList from './post/PostList'

function App() {
  const defaultPosts = [
    {title: 'React Hook', author: 'Massimo', content: 'this is a test 01'},
    {title: 'the meaining of the world', author: 'Pippo Baudo', content: 'this is a test 04'},
  ];
  const [user , setUser ] = useState('')
  const [posts, setPosts] = useState(defaultPosts)
  return (
    <React.Fragment>       
      <UserBar user={user} setUser={setUser}/>
      <br />
     { user && <CreatePost user={user} posts={posts} setPosts={setPosts}/> }
      <br />
      <br />                
      <PostList posts={posts} setPosts={setPosts}/>
           
    </React.Fragment>

      // // <Post title="this is a title" content="Super test" author="Massimo" />
      // // <CreatePost />
      // <PostList posts={posts} />
    )
}

export default App;

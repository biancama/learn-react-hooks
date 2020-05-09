const userReducer = (state, action) => {
    switch(action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
      case 'LOGOUT':
        return ''
      default:
        return state
    }
  }

  const postsReducers = (state, action) => {
    switch (action.type) {
      case 'CREATE_POST':
        const newPost = {title: action.title, author: action.author, content: action.content}
        return [newPost, ...state]
      
        default:
            return state
        }
  }


  const appReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        posts: postsReducers(state.posts, action)
    }
  }

  export default appReducer
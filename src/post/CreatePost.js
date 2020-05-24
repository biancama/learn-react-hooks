import React, { useState, useContext, useEffect } from 'react'
import { useResource } from 'react-request-hook'
import {StateContext} from '../context'
import { useNavigation } from 'react-navi'

export default function CreatePost () {
    const navigation = useNavigation()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const { state, dispatch} = useContext(StateContext)
    const { user } = state 
    const [post , createPost] = useResource(({title, content, author}) => ({
        url: '/posts',
        method: 'POST',
        data: {title, content, author}
    }))
    
useEffect(() => {
    if (post && post.data) {
        dispatch({type: 'CREATE_POST', ...post.data})   
        navigation.navigate(`/view/${post.data.id}`) 
    }    
}, [post])

    const handleCreatePost = (e) => {
        e.preventDefault()
        createPost({title, author: user, content})
    }
    return (
        <form onSubmit={handleCreatePost} >
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-list">Title:</label>
                <input type="text" name="create-list" id="create-list" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <input type="submit" value="Create"/>
        </form>
    )

}
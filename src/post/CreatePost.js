import React, { useState } from 'react'

export default function CreatePost ({ user, posts, dispatch }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleCreatePost = (e) => {
        e.preventDefault()
        const newPost = {title, author: user, content}
        dispatch({type: 'CREATE_POST', ...newPost})
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
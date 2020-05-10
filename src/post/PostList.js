import React, {useContext} from 'react'
import Post from './Post'
import {StateContext} from '../context'

export default function PostList() {
    const {state} = useContext(StateContext)
    const {posts} = state
    return (
        <div>
            {posts.map((post, i) => 
                <React.Fragment key={'post-' + i}>
                    <Post {...post} /> 
                    <hr />
                </React.Fragment>           
            )}
        </div>
    )
}
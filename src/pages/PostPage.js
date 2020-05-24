import React, { useEffect } from 'react'
import { useResource } from 'react-request-hook'
import { Link } from 'react-navi'
import Post from '../post/Post'
import FooterBar from './FooterBar'

export default function PostPage ({ id }) {

    const [ post, getPost ] = useResource(() => ({
        url: `/posts/${id}`,
        method: 'get'
    }))
    useEffect(getPost, [id])

    return (
        <div>
            <div><Link href='/'>Go back</Link></div>
            {(post && post.data)
                ? <Post {...post.data} />
                : 'Loading...'
            }
            <hr />
            <FooterBar />
        </div>
    )
}
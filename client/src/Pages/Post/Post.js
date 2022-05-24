import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../../data'
import './Post.css'
const Post = () => {

    const param = useParams()
    const post = posts.find(v => v.id.toString() === param.id)
    return (
        <div className="post">
            <img src={post.img} alt="" className="postImg" />
            <h1 className='postTitle'>{post.title}</h1>
            <p className="postDesc">{post.desc}</p>
            <p className="postLongDesc">{post.longDesc}</p>
        </div>
    )
}

export default Post

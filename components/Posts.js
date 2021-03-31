import React, { useEffect } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { deletePost } from '../Redux/actions/postActions'
import { Post } from './Post'


const Posts = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {

    }, [posts, dispatch])

    return (

        <Row>
            {posts.map(post => (

                <Post post={post} />
            ))}
        </Row>
    )
}

export default Posts

import React, { useState } from 'react'
import Link from 'next/link'
import { Col, Card, Button } from 'react-bootstrap'
import CommentModal from './CommentModal'
import { Comments } from './Comments'
import { useDispatch } from 'react-redux'
import { addComment } from '../Redux/actions/postActions'

export const Post = ({ post }) => {
    const [show, setShow] = useState(false);
    const [commentBody, setCommentBody] = useState('')

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);
    const onChange = e => setCommentBody(e.target.value)

    const onSubmit = e => {
        e.preventDefault()
        dispatch(addComment(post._id, commentBody)).then(() => window.location.reload())
    }

    return (

        <Col xs={6} md={6}>
            <Card style={{ marginBottom: 50 }}>
                <Card.Img variant="top" src={post.selectedFile} />
                <Link href="/post[id]" as={`/post/${post._id}`}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                        {post.tags && post.tags.map(tag => (
                            <Card.Text>
                                <p>{tag}</p>
                            </Card.Text>
                        ))}
                    </Card.Body>
                </Link>
                <Card.Footer>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="primary" onClick={handleShow}>Comment</Button>
                        <Button variant="primary" onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
                    </div>
                    <Card.Header style={{ marginTop: 10 }}><b>Comments</b></Card.Header>
                    {post.comments && post.comments.map(comment => (
                        <Comments comment={comment} />
                    ))}
                </Card.Footer>
            </Card>
            <CommentModal onSubmit={onSubmit} show={show} handleClose={handleClose} commentBody={commentBody} onChange={onChange} />

        </Col>
    )
}
import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import FileBase from 'react-file-base64';
import { getPosts, savePost } from '../Redux/actions/postActions'
import Posts from './Posts'

export const HomeContent = () => {
    const [postData, setpostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
    const dispatch = useDispatch()
    const handleChange = e => setpostData({ ...postData, [e.target.name]: e.target.value })
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(savePost(postData))
    }

    useEffect(() => {
        dispatch(getPosts())
    }, [dispatch])

    return (

        <Row>

            <Col lg={4} md="auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Creator</Form.Label>
                        <Form.Control onChange={handleChange} value={postData.creator} type="text" placeholder="Creator" name='creator' />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" onChange={handleChange} value={postData.title} name='title' />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Messge</Form.Label>
                        <Form.Control as="textarea" rows={3} name='message' value={postData.message} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="Tags" name='tags' value={postData.tags} onChange={handleChange} />
                    </Form.Group>
                    <Form>
                        <Form.Group>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setpostData({ ...postData, selectedFile: base64 })} />
                        </Form.Group>
                    </Form>
                    <Button type="submit" variant="primary" size="lg" block>
                        Submit
                    </Button>
                </Form>
            </Col>
            <Col lg={8} md="auto">
                <Posts />
            </Col>

        </Row>
    )
}




HomeContent.getInitialProps = ctx => { }
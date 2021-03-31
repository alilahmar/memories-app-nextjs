import React from 'react'
import { Layout } from '../../../components/Layout'
import { Container, Col, Card, Button } from 'react-bootstrap'

const index = ({ post }) => {
    return (
        <>
            <Layout />
            <Container style={{ marginTop: '110px' }}>
                <Col xs={6} md={6}>
                    <Card style={{ marginBottom: 10 }}>
                        <Card.Img variant="top" src="" />
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                                Message
                            </Card.Text>
                            {/* {post.tags.map(tag => (

                                <Card.Text>
                                    <p>{tag}</p>
                                </Card.Text>
                            ))} */}
                            tags
                        </Card.Body>
                        <Card.Footer>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 20 }}>
                                <Button variant="primary" onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
                            </div>
                            <Card>
                                <Card.Header>Comments</Card.Header>
                                <Card.Body>
                                    <Card.Title>Special title treatment</Card.Title>
                                    <Card.Text>
                                        With supporting text below as a natural lead-in to additional content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </Card.Footer>
                    </Card>
                </Col>
            </Container>
        </>
    )
}
export default index
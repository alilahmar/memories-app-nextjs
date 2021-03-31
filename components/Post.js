import Link from 'next/link'
import { Col, Card, Button } from 'react-bootstrap'

export const Post = ({ post }) => {
    return (

        <Col xs={6} md={6}>
            <Link href="/post[id]" as={`/post/${post._id}`}>
                <Card style={{ marginBottom: 10 }}>
                    <Card.Img variant="top" src={post.selectedFile} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            {post.message}
                        </Card.Text>
                        {post.tags.map(tag => (

                            <Card.Text>
                                <p>{tag}</p>
                            </Card.Text>
                        ))}
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="primary">Comment</Button>
                            <Button variant="primary" onClick={() => dispatch(deletePost(post._id))}>Delete</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    )
}
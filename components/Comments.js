import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Comments = ({ comment }) => {
    return (
        <>
            <Card style={{ marginTop: 20 }}>
                <Card.Body>
                    <Card.Text>
                        {comment.body}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="danger">Delete</Button>
                </Card.Footer>
            </Card>
        </>
    )

}

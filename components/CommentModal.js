import { Modal, Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addComment } from '../Redux/actions/postActions';



export default function CommentModal({ onSubmit, show, handleClose, onChange }) {

    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Comment</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={onChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Comment</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
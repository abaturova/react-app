import React, {Component} from 'react'
import {Button, Form} from 'react-bootstrap'

class EditC extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h1>Edit Customer</h1>
                <Form>
                    <Form.Group controlId="1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" />
                    </Form.Group>

                    <Form.Group controlId="1">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            </>
        )
    }
}

export default EditC



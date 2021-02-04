import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap"

class EditP extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <h1>Edit Product</h1>
                    <Form>
                        <Form.Group controlId="1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name of product" />
                        </Form.Group>

                        <Form.Group controlId="1">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter price of product" />
                        </Form.Group>

                        <Button variant="outline-secondary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditP
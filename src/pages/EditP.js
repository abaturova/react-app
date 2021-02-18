import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap"

class EditP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            name: 'name',
            price: '0.99'
        })
    }
    handleSubmit(event){
        event.preventDefault()
        console.log('Отправленные данные: ' + this.state.name + ' ' + this.state.price)
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Edit Product</h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="ProductForm">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={this.state.name} onChange={this.handleChange} type="text" placeholder="Enter name of product" />
                        </Form.Group>

                        <Form.Group controlId="ProductForm">
                            <Form.Label>Price</Form.Label>
                            <Form.Control value={this.state.price} onChange={this.handleChange} type="text" placeholder="Enter price of product" />
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
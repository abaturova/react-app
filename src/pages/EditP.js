import React, {Component} from 'react'
import {Button, Form} from "react-bootstrap"
import classes from '../components/styles'
import ProductsData from '../constans/products'

class EditP extends Component {
    constructor(props) {
        super(props)

        let id = this.props.match.params.id
        let name = this.props.match.params.name
        this.state = {
            id: id,
            name: name,
            price: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        console.log('Отправленные данные: ' + this.state.name + ' ' + this.state.price)
        console.log('Ид: ' + this.state.id)
    }

    render() {
        return (
            <>
                <div className="container" align={'center'} style={classes.div}>
                    <h1>Edit Product</h1>
                    <Form onSubmit={this.handleSubmit} style={classes.form}>
                        <Form.Group controlId="ProductForm">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={this.state.name} name="name" onChange={this.handleChange} type="text" placeholder="Enter name of product" />
                        </Form.Group>

                        <Form.Group controlId="ProductForm">
                            <Form.Label>Price</Form.Label>
                            <Form.Control value={this.state.price} name="price" onChange={this.handleChange} type="text" placeholder="Enter price of product" />
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
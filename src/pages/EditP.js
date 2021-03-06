import React, {Component} from 'react'
import {Form} from "react-bootstrap"
import classes from '../components/styles'
import {ProductsData} from '../constans/products'
import {Button} from '@material-ui/core'

class EditP extends Component {
    constructor(props) {
        super(props)
        let name, price, product, word
        let id = this.props.match.params.id
        if(id) {
            product = ProductsData.find( product => product.id == id)
            name = product.name
            price = product.price
            word = 'Edit'
        } else {
            name = ''
            price = ''
            word = 'Create'
        }

        this.state = {
            name: name,
            price: price,
            word: word
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
                <div className="container" style={classes.div}>
                    <h1>{this.state.word} Product</h1>
                    <Form onSubmit={this.handleSubmit} style={classes.form}>
                        <Form.Group controlId="ProductForm">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={this.state.name} name="name" onChange={this.handleChange} type="text" placeholder="Enter name of product" />
                        </Form.Group>

                        <Form.Group controlId="ProductForm">
                            <Form.Label>Price</Form.Label>
                            <Form.Control value={this.state.price} name="price" onChange={this.handleChange} type="text" placeholder="Enter price of product" />
                        </Form.Group>

                        <Button variant="outlined" type="submit">
                            Save
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
}

export default EditP
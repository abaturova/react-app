import React, {Component} from 'react'
import {Form} from 'react-bootstrap'
import {Button} from '@material-ui/core'
import classes from '../components/styles'
import {UsersData} from '../constans/customers'

class EditC extends Component {
    constructor(props) {
        super(props)
        let name, address, tel , user , word
        let id = this.props.match.params.id
        if(id) {
            user = UsersData.find( user => user.id == id)
            name = user.name
            address = user.address
            tel = user.tel
            word = 'Edit'
        } else {
            name = ''
            address = ''
            tel = ''
            word = 'Create'
        }

        this.state = {
            name: name,
            address: address,
            tel: tel,
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
        console.log('Отправленные данные: ' + this.state.name + ' ' + this.state.address +' '+this.state.tel)
        console.log('Ид: ' + this.state.id)
    }

    render() {
        return (
            <>
            <div className="container" style={classes.div}>
                <h1>{this.state.word} Customer</h1>
                <Form onSubmit={this.handleSubmit} style={classes.form}>
                    <Form.Group controlId="CustomerForm">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={this.state.name} name="name" onChange={this.handleChange} type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="CustomerForm">
                        <Form.Label>Address</Form.Label>
                        <Form.Control value={this.state.address} name="address" onChange={this.handleChange} type="text" placeholder="Enter your address" />
                    </Form.Group>

                    <Form.Group controlId="CustomerForm">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control value={this.state.tel} name="tel" onChange={this.handleChange} type="text" placeholder="Enter your phone number" />
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

export default EditC



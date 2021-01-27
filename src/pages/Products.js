import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";

class Products extends Component {
    render() {
        return (
            <div className="container">
                <h1>Product list  {' '}
                    <Button variant="outline-secondary">Create</Button>
                </h1>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Parachute Pants</td>
                        <td>29.99</td>
                    </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Products
import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import ProdList from "../components/prodList";

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
                    <ProdList />
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Products
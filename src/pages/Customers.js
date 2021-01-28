import React, {Component} from 'react'
import {Button, ListGroup, Table} from 'react-bootstrap'


class Customers extends Component {
    render() {
        return (
            <div className="container">
                <h1>Customers list  {' '}
                    <Button variant="outline-secondary">Create</Button>
                </h1>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Tel.</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark Benson</td>
                        <td>353 Rochester St, Rialto FL</td>
                        <td>555-534-2342</td>
                    </tr>
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Customers
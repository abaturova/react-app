import React, {Component} from 'react'
import {Button, Table} from 'react-bootstrap'
import CustList from "../components/custList"

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
                    <CustList />
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default Customers
import React, {Component} from 'react'
import {Button, Table} from 'react-bootstrap'
import CustList from "../components/custList"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import EditC from "./EditC"

class Customers extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h1>Customers list  {' '}
                    <Button href="/EditC" variant="outline-secondary">Create</Button>
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

        <Router>
            <Switch>
                <Route exact path="/EditC" component={EditC} />
            </Switch>
        </Router>
        </>
        )
    }
}

export default Customers
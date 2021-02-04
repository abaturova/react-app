import React, {Component} from 'react'
import {Button, Table} from 'react-bootstrap'
import CustList from "../components/custList"
import {Link} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import {classes} from "istanbul-lib-coverage";

class Customers extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h1>Customers list  {' '}
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/editc"
                        underline="always"
                        variant="subtitle2"
                        className={classes.link}
                    >
                        <Button variant="outline-secondary">Create</Button> </Link>
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

        </>
        )
    }
}

export default Customers


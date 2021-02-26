import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import CustList from "../components/custList"
import {Link , Button} from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import classes from "../components/styles"

class Customers extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h1>Customers list  {' '}
                    <Link
                        component={RouterLink}
                        to="/customers/create"
                        style={classes.root}
                    >
                        <Button variant="outlined">Create</Button> </Link>
                </h1>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Tel.</th>
                        <th> </th>
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


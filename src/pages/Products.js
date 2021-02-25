import React, {Component} from 'react'
import {Table} from "react-bootstrap"
import ProdList from "../components/prodList"
import {Link as RouterLink} from "react-router-dom"
import classes from "../components/styles"
import {Link , Button} from "@material-ui/core"

class Products extends Component {
    render() {
        return (
            <div className="container">
                <h1>Product list  {' '}
                    <Link
                        component={RouterLink}
                        to="/products/create"
                        style={classes.root}
                    >
                        <Button variant="outlined">Create</Button> </Link>
                </h1>

                <Table responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th> </th>
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
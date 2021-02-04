import React, {Component} from 'react';
import {Button, Table} from "react-bootstrap";
import ProdList from "../components/prodList";
import {Link as RouterLink} from "react-router-dom";
import {classes} from "istanbul-lib-coverage";
import {Link} from "@material-ui/core";

class Products extends Component {
    render() {
        return (
            <div className="container">
                <h1>Product list  {' '}
                    <Link
                        align="center"
                        color="secondary"
                        component={RouterLink}
                        to="/editp"
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
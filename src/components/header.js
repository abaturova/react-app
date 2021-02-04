import React, {Component} from 'react'
import {Nav,Navbar} from "react-bootstrap"
import {Route,BrowserRouter as Router, Switch} from 'react-router-dom'
import Customers from "../pages/Customers"
import Products from "../pages/Products"

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><strong>Invoice App</strong></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/customers">Customers</Nav.Link>
                        <Nav.Link href="/products">Products</Nav.Link>
                    </Nav>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path="/customers" component={Customers} />
                        <Route exact path="/products" component={Products} />
                    </Switch>
                </Router>

            </>
        )
    }
}

export default Header
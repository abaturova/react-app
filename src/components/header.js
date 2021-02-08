import React, {Component} from 'react'
import {Nav,Navbar} from "react-bootstrap"
import { Link as RouterLink } from 'react-router-dom'
import {Link } from '@material-ui/core'
import classes from "./styles"


class Header extends Component {
    render() {
        const FancyLink = React.forwardRef((props, ref) => (
            <RouterLink ref={ref} {...props}>{props.children}</RouterLink>
        ))
        return (
            <>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><strong>Invoice App</strong></Navbar.Brand>
                    <Nav className="mr-auto">
                            <Link to="/customers"
                                  classes={{root: classes.root}}
                                  component={FancyLink}>Customers</Link>
                            <Link to="/products"
                                  className={classes.link}
                                  component={FancyLink}>Products</Link>
                    </Nav>
                </Navbar>

            </>
        )
    }
}

export default Header

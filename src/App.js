import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/header"
import {Route, Switch, Redirect, withRouter} from "react-router-dom"
import Customers from "./pages/Customers"
import Products from "./pages/Products"
import EditC from "./pages/EditC"
import EditP from "./pages/EditP"

class App extends Component {
    render() {
        const {history} = this.props
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route history={history} path='/customers' component={Customers}/>
                    <Route exact history={history} path='/products' component={Products}/>
                    <Route history={history} path='/editc' component={EditC}/>
                    <Route history={history} path='/products/create' component={EditP}/>
                    <Route path="/products/:id" component={EditP} />
                    <Redirect from='/' to='/home'/>
                </Switch>
            </div>
        )
    }
}

export default withRouter(App)
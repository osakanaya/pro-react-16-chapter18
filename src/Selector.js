import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

export class Selector extends Component {

    renderMessage= (msg) => <h5 className="bg-info text-white m-2 p-2">{ msg }</h5>

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <Link className="m-2 btn btn-block btn-primary" to="/">Default URL</Link>
                        <Link className="m-2 btn btn-block btn-primary" to="/products">Products</Link>
                        <Link className="m-2 btn btn-block btn-primary" to="/suppliers">Suppliers</Link>
                        <Link className="m-2 btn btn-block btn-primary" to="/old/data">Old Link</Link>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" component={ ProductDisplay } />
                            <Route path="/suppliers" component={ SupplierDisplay } />
                            <Redirect from="/old/data" to="/suppliers" />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>            
            </div>
        </Router>
    }
}
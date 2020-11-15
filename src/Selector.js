import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route, Switch, Redirect } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";
import { RouteInfo } from "./routing/RouteInfo";

export class Selector extends Component {

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <NavLink className="m-2 btn btn-block btn-primary" 
                            activeClassName="active" to="/products">Products</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary" 
                            activeClassName="active" to="/suppliers">Suppliers</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active" to="/info/match">Match</NavLink>
                        <NavLink className="m-2 btn btn-block btn-primary"
                            activeClassName="active" to="/info/location">Location</NavLink>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" component={ ProductDisplay } />
                            <Route path="/suppliers" component={ SupplierDisplay } />
                            <Route path="/info/:dataType" component={ RouteInfo } />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>            
            </div>
        </Router>
    }
}
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { ToggleLink } from "./routing/ToggleLink";
//import { RoutedDisplay } from "./routing/RoutedDisplay";
//import { IsolatedTable } from "./IsolatedTable";
//import { IsolatedEditor } from "./IsolatedEditor";
//import { RequestError } from "./webservice/RequestError";
import { GraphQLTable } from "./graphql/GraphQLTable";
import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";
import { GraphQLEditor } from "./graphql/GraphQLEditor";

export class Selector extends Component {
    render() {

        return <Router getUserConfirmation= { this.customGetUserConfirmation }>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <ToggleLink to="/products">Products</ToggleLink>
                        <ToggleLink to="/suppliers">Suppliers</ToggleLink>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" exact={ true } component={ GraphQLTable(PRODUCTS) } />
                            <Route path="/suppliers" exact={ true } component={ GraphQLTable(SUPPLIERS) } />
                            <Route path="/:dataType/edit/:id" component={ GraphQLEditor() } />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>            
            </div>
        </Router>
    }
}
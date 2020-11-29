import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import * as queries from "./queries";
import { ProductTable } from "../ProductTable";
import * as mutations from "./mutations";

export const GraphQLTable = () => {
    const getAll = gql(queries.products.getAll.graphql);
    const deleteItem = gql(mutations.products.delete.graphql);

    return class extends Component {
        constructor(props) {
            super(props);
            this.editCallback = (item) => this.props.history.push(`/products/edit/${item.id}`);
        }

        render() {
            return <Query query={ getAll }>
                {({ loading, data, refetch }) => {
                        if (loading) {
                            return <h5 className="bg-info text-white text-center m-2 p-2">
                                Loading...
                            </h5>
                        } else {
                            return <Mutation mutation={ deleteItem } refetchQueries={ () => [{ query: getAll }] }>
                                { doDelete => 
                                    <React.Fragment>
                                        <ProductTable products={ data.products }
                                            editCallback={ this.editCallback }
                                            deleteCallback={ (p) => doDelete({ variables: { id: p.id }}) } />
                                        <div className="text-center">
                                            <button className="btn btn-primary" onClick={ () => refetch() }>
                                                Reload Data
                                            </button>
                                        </div>
                                    </React.Fragment>
                            }
                            </Mutation>
                        }                       
                    }
                }
            </Query>
        }
    }
}
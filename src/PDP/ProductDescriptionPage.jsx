import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import {gql} from "@apollo/client";

class ProductDescriptionPage extends React.Component {
    render() {
        return(
            <>
                {console.log(this.props.data)}
            </>
        )
    }
}
export default  graphql(gql`
query{
  categories{name, products{description, brand, inStock, gallery ,category,prices{currency, amount}, attributes{items{displayValue}}}}
}
`)(ProductDescriptionPage);
import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import {gql} from "@apollo/client";

class ProductDescriptionPage extends React.Component {
    getData(){
        var data = this.props.data
        if(data.loading){
            return(<div>Loading...</div>)
        } else {
            return(
            <div>
                <div>{data.categories[0].name}</div>
                <div>{data.categories[0].products[0].gallery.map(src=><img src={src} alt="item" />)}</div>
            </div>)
        }
    }
    render() {
        return(
            <>
                1
               {this.getData()} 
            </>
        )
    }
}
export default  graphql(gql`
query{
  categories{name, products{description, brand, inStock, gallery ,category,prices{currency, amount}, attributes{items{displayValue}}}}
}
`)(ProductDescriptionPage);
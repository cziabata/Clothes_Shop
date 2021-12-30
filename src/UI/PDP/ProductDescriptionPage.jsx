import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import {gql} from "@apollo/client";
import { compose } from "redux";

class ProductDescriptionPage extends React.Component {
    getData(){
        var data = this.props.data;
        let data2 = this.props.data2;
        if(data.loading || data2.loading){
            return(<div>Loading...</div>)
        } else {
            return(
            <div>
                <div>{data.categories[0].name}</div>
                <div>{data.categories[1].products[1].gallery.map(src=><img src={src} alt="item" />)}</div>
                <div>
                    <span dangerouslySetInnerHTML={{__html:data.categories[0].products[1].description}} />
                </div>
                <div>
                    {data2.category.products.map(products=><div>{products.name}</div>)}
                </div>
            </div>)
        }
    }
    render() {
        return(
            <>
               {this.getData()} 
            </>
        )
    }
}
const Data = gql`
query{
  categories{name, products{description, brand, inStock, gallery ,category,prices{currency, amount}, attributes{items{displayValue}}}}
}
`
const Data2 = gql`
query{
    category{products {name}}
  }
`
export default  compose(
    graphql(Data),
    graphql(Data2, {name: "data2"})
)(ProductDescriptionPage);
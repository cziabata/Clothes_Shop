import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "redux";
import { Data, Data2 } from "../../Data_Access_Layer/Data_Access_Layer";

class ProductDescriptionPage extends React.Component {
    getData(){
        let data = this.props.data;
        let data2 = this.props.data2;
        if(data.loading || data2.loading){
            return(<div>Loading...</div>)
        } else {
            return(
            <div>
                <div>{data.categories[0].name.toUpperCase()}</div>
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
export default  compose(
    graphql(Data),
    graphql(Data2, {name: "data2"})
)(ProductDescriptionPage);
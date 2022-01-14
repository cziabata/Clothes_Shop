import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { GetClothes } from "../../../Data_Access_Layer/Data_Access_Layer";
import ListingViewer from "./ListingViewer";

class Clothes extends React.Component {
    getData(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading...</div>)
        } else {
            return(
                <ListingViewer clearImage={this.props.clearImage} setProduct={this.props.setProduct} data={data}/>
            )
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
export default graphql(GetClothes)(Clothes)
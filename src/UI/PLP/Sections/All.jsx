import React from "react";
import { graphql } from '@apollo/client/react/hoc';
import { compose } from "redux";
import { Data } from "../../../Data_Access_Layer/Data_Access_Layer";
import ProductDescriptionPage from "../../PDP/ProductDescriptionPage";

class All extends React.Component {
    getData(){
        let data = this.props.data;
        if(data.loading){
            return(<div>Loading...</div>)
        } else {
            
            return(
            <div>
                <h1>ALL</h1>
                <div>{data.categories[1].products[1].gallery.map(src=><img src={src} alt="item" />)}</div>
                <div>
                    <span dangerouslySetInnerHTML={{__html:data.categories[0].products[1].description}} />
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
export default compose(graphql(Data))(All)
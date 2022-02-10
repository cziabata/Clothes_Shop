import React from "react";
import { connect } from "react-redux";

class Bag extends React.Component {
    render(){
        return(
            <div>
                <div><h1>Cart</h1></div>
                <div>
                    {this.props.cartItems.map(item=><div key={item.productProperties.id}>
                        
                    </div>)}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems
    }
}

export default connect(mapStateToProps, {})(Bag);

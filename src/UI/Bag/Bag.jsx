import React from "react";
import { connect } from "react-redux";
import { addToSum, removeFromSum, increaseItem, decreaseItem } from "../../Redux/cartReducer";
import common_styles from "../Header/Header.module.scss";
import bag_styles from"./Bag.module.scss";

class Bag extends React.Component {
    render(){
        return(
            <div>
                <div><h1 className={bag_styles.bag_header}>Cart</h1></div>
                <div>
                    {this.props.cartItems.map(item=><div key={item.productProperties.id}>
                        <div>
                            <div className={bag_styles.product_name}>{item.productProperties.name}</div>
                            <div>{item.productProperties.prices.map(
                                    price=>{if(price.currency===this.props.currencyName){
                                        return <span key={price.currency} className={bag_styles.product_price}>
                                                    {this.props.currentCurrency + price.amount}
                                               </span>
                                        } else {return ""}})}
                            </div>
                            <div>
                                    {
                                        item.productProperties.attributes.length > 0 
                                        ? item.productProperties.attributes.map(attribute =><div key={attribute.id}>
                                            <div >{attribute.name}:</div>
                                            <div className={common_styles.attrWrapper}>
                                                {
                                                    attribute.type === "swatch"
                                                    ? attribute.items.map(item=><div key={item.id} 
                                                                                     style={{background:item.value}}
                                                                                     className={common_styles.colorAttr}/>)
                                                    : attribute.items.map(item=>
                                                        <div key={item.id} className={common_styles.itemAttr}><div>{item.value}</div></div>)
                                                }
                                            </div>
                                        </div>)
                                        : null
                                    }
                                </div>
                        </div>
                        <div>
                        <div className={common_styles.cartFlexContainer}>
                                <div className={common_styles.cartBtns}>
                                    <button className={common_styles.cartCounter}
                                            onClick={()=>{
                                                this.props.addToSum(item.productProperties.prices.map(
                                                    price=>{if(price.currency===this.props.currencyName){
                                                    return  price.amount
                                                } else{return 0}}))
                                                this.props.increaseItem(item.productProperties.id)
                                            }}>
                                        +
                                    </button>
                                    <div>{item.productAmount}</div>
                                    <button className={common_styles.cartCounter}
                                            onClick={()=>{
                                                debugger
                                                let currentPrices = item.productProperties.prices.map(price=>{
                                                    if(price.currency===this.props.currencyName){
                                                        return price.amount
                                                    } else {return 0}})
                                                let deletingPrice = currentPrices.find(i=>i!==0)
                                                let indexOfdelPrice = this.props.cartSum.indexOf(deletingPrice)
                                                if(indexOfdelPrice>=0){
                                                    let reducedCartSum = this.props.cartSum
                                                    this.props.cartSum.splice(indexOfdelPrice, 1)
                                                    this.props.removeFromSum(reducedCartSum)
                                                }
                                                this.props.decreaseItem(item.productProperties.id)
                                            }}>
                                        -
                                    </button>
                                </div>
                                <div className={common_styles.cartItemPhoto}>
                                    <img src={item.productProperties.gallery[0]} alt="Product in cart"/>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
        currentCurrency: state.currencyReducer.currentCurrency,
        currencyName: state.currencyReducer.name,
        cartSum: state.cartReducer.cartSum,
    }
}

export default connect(mapStateToProps, {addToSum,
    removeFromSum, 
    increaseItem, 
    decreaseItem, })(Bag);

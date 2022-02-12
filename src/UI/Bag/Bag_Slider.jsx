 import React from "react";
 import Left_Arrow from "../Images/Left_Arrow.svg";
 import Right_Arrow from "../Images/Right_Arrow.svg";
 import bag_styles from"./Bag.module.scss";
 import cn from "classnames";

 export class BagSlider extends React.Component {
     state = {
         current: 0,
         length: this.props.images.length
     }
     prevSlide = () => {
         this.setState({
             current: this.state.current === 0 ? this.state.length-1 : this.state.current-1
         })
     }
     nextSlide = () => {
        this.setState({
            current: this.state.current === this.state.length-1 ? 0 : this.state.current+1
        })
    }
     render() {
         return(
             <section className={bag_styles.slider}>
                 <img src={Left_Arrow} alt="Prev Slide" className={bag_styles.left_arrow} onClick={()=>this.prevSlide()}/>
                 <img src={Right_Arrow} alt="Next Arrow" className={bag_styles.right_arrow} onClick={()=>this.nextSlide()}/>
                {this.props.images.map((image, index)=>
                    <div key={image}>
                        {index===this.state.current && <img src={image} alt={image}/>}
                    </div>)}
             </section>
         )
     }
 }
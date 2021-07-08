import React, { Component } from 'react'


const isProductLike = (productStatus)=>{
    if(productStatus){
        return "Liked"
    }else{
        return null
    }
}
class LikeButton extends Component {
    state = {
        liked: false
    }

    handleClick = e => {
        e.preventDefault()
        const newState = !this.state.liked
        this.setState({liked: newState})
    }
    render(){

        
        return (
            <button onClick={this.handleClick}>{this.props.products}Liked: {this.state.liked ? "LIKED!" : null}</button>
            )
        }
}


export default LikeButton
    

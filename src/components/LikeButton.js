import React, { Component } from 'react'



class LikeButton extends Component {
    state = {
        liked: false
    }

    handleClick = e => {
        e.preventDefault()
        console.log(this.props)
        const newState = !this.state.liked
        this.setState({liked: newState})
    }
    render(){
        return (
            <button onClick={this.handleClick}>Liked: {this.state.liked ? `${this.props.name} LIKED!` : null }</button>
            )
        }
}


export default LikeButton
    

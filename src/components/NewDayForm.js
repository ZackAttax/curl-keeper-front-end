import React, { Component } from "react";
import { connect } from "react-redux";
import { createDay } from '../actions/createDay'

class NewDayForm extends Component {
    
    state = {
        products: "",
        process: "",
        rating: 1,
        weather: "",
        user_id: this.props.user.id
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     handleSubmit = event => {
         event.preventDefault()
         this.props.createDay(this.state)
     }
    render(){
       
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Products:
                    </label><br/>
                    <textarea type="textarea" name="products" value={this.state.products} 
                    onChange={this.handleChange}
                    placeholder="Products"/><br/>

                    <label>
                    Process:
                    </label><br/>
                    <textarea type="text" name="process" value={this.state.process}
                    onChange={this.handleChange}/><br/>

                    <label>
                    Weather:
                    </label><br/>
                    <input type="text" name="weather" value={this.state.weather}
                    onChange={this.handleChange}/><br/>

                    <label>
                    Rating:
                    <select type="radio" name="rating"
                    value={this.state.rating}
                    onChange={this.handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>3</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    </select>
                    </label><br/>
                    {/* <input type="hidden" name="user_id" value={console.log(this.props.user.id)}></input> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>

    )
    }

}
const mapStateToProps = (state) => ({
    user: state.user.user
})
const mapDispatchToProps = dispatch => ({
    createDay: dayInfo => dispatch(createDay(dayInfo))
  })
export default connect(mapStateToProps, mapDispatchToProps)(NewDayForm)
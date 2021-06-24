import React, { Component } from "react";
import { connect } from "react-redux";


class NewDayForm extends Component {
    state = {
        products: "",
        process: "",
        rating: "",
        weather: ""
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
     handleSubmit = event => {
         console.log(event)
         event.preventDefault()
         this.props.createUser(this.state)
     }
    render(){
        debugger
        
        return (
            <div>
                <form>
                    <label>
                    Products:
                    <input type="textarea" name="products" value={this.state.products} 
                    placeholder="Products"/>
                    </label><br/>

                    <label>
                    Process:
                    <input type="text" name="name" />
                    </label><br/>

                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label><br/>

                    <label>
                    Name:
                    <input type="text" name="name" />
                    </label><br/>

                    <input type="submit" value="Submit" />
                </form>
            </div>

    )
    }

}
const mapStateToProps = (state) => ({
    user: state.user.user
})
export default connect(mapStateToProps)(NewDayForm)
import React, { Component } from 'react'
import { getAllTheData } from '../../actions/getAllTheData'
import { connect } from 'react-redux'
//import { FilterForm } from './FilterForm'
import { HairTypeCard } from './HairTypeCard'





class FilterByHairType extends Component {
    state = {
        curl_pattern: "2a",
        curl_type: "wavy",
        porosity: "low",
        density: "thin",
        width: "thin"
    }

    
    componentDidMount() {
        this.props.getAllTheData()
    }
    handleFormChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //const curlPatternFilter = this.props.users.filter(user => user.curl_pattern === this.state.curl_pattern)
    
    render() {
       
        // const users = this.props.users
        //     users.map(hairType => return <HairTypeCard key={hairType.id}>{hairType.name}</HairTypeCard>)
        
        // function that filter by state returns filtered array map
            return(
                <div> 
               
                    <form>
                        <label>Curl Pattern</label>
                        <select name="curl_pattern" id='curlPattern'
                            value={this.state.curl_pattern} onChange={this.handleFormChange}>
                                <option value="2a">2A</option>
                                <option value="2b">2B</option>
                                <option value="2c">2C</option>
                                <option value="3a">3A</option>
                                <option value="3b">3B</option>
                                <option value="3c">3C</option>
                                <option value="4a">4A</option>
                                <option value="4b">4B</option>
                                <option value="4c">4C</option>
                        </select>
                            <br/>
                    </form>
                    <ul className='hair-type-cards'>
                    {this.props.users[9] && this.props.users.map(hairType => <HairTypeCard key={hairType.id} {...hairType} />)}
                    </ul>
                </div>
        )
    }
}
        // {sortedByRating.map(day => <DayCard key={day.id} {...day} />)}
const mapDispatchToProps = dispatch => ({
    getAllTheData: () => dispatch(getAllTheData())
  })
const mapStateToProps = (state) => ({
    users: state.users.users
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterByHairType)

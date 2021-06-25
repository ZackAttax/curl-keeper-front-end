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
    //{curl_pattern, curl_type, porosity, density, width}   
    componentDidMount() {
        this.props.getAllTheData()
    }
    handleFormChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    curlPatternFilter() {if(this.props.users[9]){
      return(
          this.props.users.filter(user => user.curl_pattern === this.state.curl_pattern &&
              user.curl_type === this.state.curl_type && user.porosity === this.state.porosity
              && user.density === this.state.density && user.width === this.state.width
            )

      )
    }}
    
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

                <label>Curl Type</label>
                <select name="curl_type" id='curlType'
                value={this.state.curl_type}
                onChange={this.handleFormChange}>
                    <option value="wavy">Wavy</option>
                    <option value="curly">Curly</option>
                    <option value="oily">Oily</option>
                </select>
                <br/>

                <label>Porosity</label>
                <select name="porosity" id='porosity'
                value={this.state.porosity}
                onChange={this.handleFormChange}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
                <br/>

                <label>Density</label>
                <select name="density" id='density'
                value={this.state.density}
                onChange={this.handleFormChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>

                <label>Width</label>
                <select name="width" id='width'
                value={this.state.width}
                onChange={this.handleFormChange}>
                    <option value="thin">Thin</option>
                    <option value="medium">Medium</option>
                    <option value="thick">Thick</option>
                </select>
                <br/>
                    </form>
                    <ul className='hair-type-cards'>
                    {this.props.users.length > 1 && this.curlPatternFilter().map(hairType => <HairTypeCard key={hairType.id} {...hairType} />)}
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

import React from "react"
import { connect } from "react-redux"
import DayCard from '../DayCard'

const User = (props) => {
    debugger
    const sortedByRating = props.user.days.sort((a, b)=>{return b.rating - a.rating});
   
    return (
        <ul>
            <li key='1'>{props.user.username ? `Username: ${props.user.username}` : null }</li>
            <li key='2'>Curl Pattern: {props.usercurl_pattern}</li>
            <li key='3'>Curl Type: {props.user.curl_type}</li>
            <li key='4'>Porosity: {props.user.porosity}</li>
            <li key='5'>Density: {props.user.density}</li>
            <li key='6'>Width: {props.user.width}</li>

            <ul className="day-cards">
            {sortedByRating.map(day => <DayCard key={day.id} {...day} />)}
            </ul>

        </ul>
    )

}
const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps)(User)
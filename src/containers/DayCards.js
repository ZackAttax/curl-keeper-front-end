import React from 'react'
import { connect } from 'react-redux'
import DayCard from '../components/DayCard'

const DayCards = (props) => {
    
    return (
        <ul className="day-cards">
            {props.days.map(day => <DayCard key={day.id} {...day} />)}
            </ul>
    )
}
const msp = (state) => ({
    days: state.days.days
})

export default connect(msp)(DayCards)
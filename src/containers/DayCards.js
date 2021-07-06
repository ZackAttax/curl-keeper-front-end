import React from 'react'
import { connect } from 'react-redux'
import DayCard from '../components/DayCard'

const DayCards = (props) => {
    const sortedByRating = props.days.length > 1 && props.days.sort((a, b)=>{return b.rating - a.rating});
    return (
        <ul className="day-cards">
            {props.days.length > 1 && sortedByRating.map(day => <DayCard key={day.id} {...day} />)}
            </ul>
    )
}
const msp = (state) => ({
    days: state.days.days
})

export default connect(msp)(DayCards)
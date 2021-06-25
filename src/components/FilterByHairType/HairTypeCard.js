import React from 'react'
import DayCard from '../DayCard';

export const HairTypeCard = (props) => {

    const sortedByRating = props.days.sort((a, b)=>{return b.rating - a.rating});
   
    return (
        <ul>
            <li key='1'>Curl Pattern: {props.curl_pattern}</li>
            <li key='2'>Curl Type: {props.curl_type}</li>
            <li key='3'>Porosity: {props.porosity}</li>
            <li key='4'>Density: {props.density}</li>
            <li key='5'>Width: {props.width}</li>

            <ul className="day-cards">
            {sortedByRating.map(day => <DayCard key={day.id} {...day} />)}
            </ul>

        </ul>
    )

}
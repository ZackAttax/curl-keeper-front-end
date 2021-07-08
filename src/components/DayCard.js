import React from 'react'
import LikeButton from './LikeButton'

const DayCard = (props) => {
    const {products, process, rating, id, weather} = props
   
    return (
        <div className='card'>
            <li id={id}>
            <p>products: {products}</p>
                    <LikeButton />
            <p>process: {process}</p>
            <p>rating: {rating}</p>
            <p>weather: {weather}</p>
            </li>
        </div>
    )
}
export default DayCard
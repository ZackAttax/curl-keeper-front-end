import React from 'react'

const DayCard = (props) => {
    const {products, process, rating, id} = props
    return (
        <div className='card'>
            <li id={id}>
            <p>products: {products}</p>  
            <p>process: {process}</p>
            <p>rating: {rating}</p>
            </li>
        </div>
    )
}
export default DayCard
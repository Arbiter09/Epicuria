import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
  return (
    <div>
        <div>
            <h3>Search Bar</h3>
        </div>
        <div className='card-container'>
        <RestaurantCard />
        <RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard /><RestaurantCard />
        </div>
    </div>
  )
}

export default Body
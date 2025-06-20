import React from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from "../utils/mockData"


const Body = () => {
  return (
    <div>
        <div>
            <h3>Search Bar</h3>
        </div>
        <div className='card-container'>
        {restaurantList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/> )}
        </div>
    </div>
  )
}

export default Body
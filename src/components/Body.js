import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import {restaurantList} from "../utils/mockData"
import { SWIGGY_API } from '../utils/constants'
import Shimmer from './Shimmer'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([])

  const handleTopRestaurants = () => {
    const newList = listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
    setListOfRestaurants(newList)
  }

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API)
    const json = await data.json()
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //setListOfRestaurants(json.data.cards[1].card.gridElements.infoWithStyle.restaurants)
  }

  if (listOfRestaurants.length === 0){
    return <Shimmer />
  }

  return (
    <div className='body-container'>
        <div>
            <button className='top-rated-btn' onClick={() => handleTopRestaurants()}>Top Rated Restaurants</button>
        </div>
        <div className='card-container'>
        {listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/> )}
        </div>
    </div>
  )
}

export default Body
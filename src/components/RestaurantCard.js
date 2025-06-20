import React from 'react'
import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({resData}) => {

  const {name,cloudinaryImageId,cuisines,costForTwo,avgRating,deliveryTime} = resData?.info;

  return (
    <div className='res-card-container'>
       <div>
            <img className="restaurant-logo" src={
          CDN_URL +
          cloudinaryImageId
        } />
       </div>
       <div className='res-info'>
        <span>{name}</span>
        <span>{cuisines.join(", ")}</span>
        <span>{avgRating} stars</span>
        <span>{costForTwo}</span>
        <span>{deliveryTime}</span>
       </div>
    </div>
  )
}

export default RestaurantCard
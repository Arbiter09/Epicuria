import React from 'react'

const RestaurantCard = () => {
  return (
    <div className='res-card-container'>
       <div>
            <img className="restaurant-logo" src="https://static.vecteezy.com/system/resources/previews/021/769/098/non_2x/burger-logo-free-vector.jpg" />
       </div>
       <div className='res-info'>
        <span>Burger King</span>
        <span>Burgers, Pizza, Fries!</span>
        <span>3.0 stars</span>
        <span>40 minutes</span>
       </div>
    </div>
  )
}

export default RestaurantCard
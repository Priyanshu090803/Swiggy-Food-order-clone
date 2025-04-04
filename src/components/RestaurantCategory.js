import React from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({data}) => {
  return (
    <div>
    <div className=' w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4' >
    <div className=' flex justify-between'>
    
    <span className=' h-5 ml-2 font-bold text-lg'>{data.title}({data.itemCards.length})</span>
    <span className=' cursor-pointer'>⬇️</span>

    </div>
    
    <ItemList items ={data.itemCards}/>
     
     </div>
     </div>
  )
}

export default RestaurantCategory


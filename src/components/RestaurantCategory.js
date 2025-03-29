import React from 'react'
import ItemList from './ItemList'
const RestaurantCategory = (data) => {
  return (
    <div className=' w-6/12 mx-80 my-10 h-20 shadow-2xl rounded-lg shadow-red-200 bg-blue-50  m-5 relative pt-2' >
    <span className=' h-5 ml-2 font-bold text-lg'>{data.data.title}({data.data.itemCards.length})</span>
    <span className=' absolute right-5'>⬇️</span>
      <ItemList items ={data.data.itemCards}/>
     </div>
     
  )
}

export default RestaurantCategory


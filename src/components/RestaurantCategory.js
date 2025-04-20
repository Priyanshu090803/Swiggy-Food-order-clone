import React, { useState } from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({data,showIndex,SetShowIndex}) => {
// const [showItems,setShowItem]=useState(false)
  let handleClick=()=>{
    SetShowIndex()
    //setShowItem(!showItem)
  }
  return (
    <div>
    <div className='  md:w-6/12 w-2/3 mx-auto my-4 bg-yellow-50 rounded-lg shadow-lg p-8 py-8' >
    <div className=' flex justify-between hover:text-blue-500 cursor-pointer' onClick={handleClick} >
    
    <span className=' h-5 ml-2 font-bold text-lg'>{data.title}({data.itemCards.length})</span>
    <span className=' cursor-pointer'>⬇️</span>

    </div>
    
   { showIndex && <ItemList items ={data.itemCards}/>}
     
     </div>
     </div>
  )
}

export default RestaurantCategory


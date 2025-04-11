<<<<<<< HEAD
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
    <div className=' w-6/12 mx-auto my-4 bg-yellow-50 rounded-lg shadow-lg p-8 py-8' >
    <div className=' flex justify-between hover:text-blue-500 cursor-pointer' onClick={handleClick} >
=======
import React from 'react'
import ItemList from './ItemList'
const RestaurantCategory = ({data}) => {
  return (
    <div>
    <div className=' w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4' >
    <div className=' flex justify-between'>
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
    
    <span className=' h-5 ml-2 font-bold text-lg'>{data.title}({data.itemCards.length})</span>
    <span className=' cursor-pointer'>⬇️</span>

    </div>
    
<<<<<<< HEAD
   { showIndex && <ItemList items ={data.itemCards}/>}
=======
    <ItemList items ={data.itemCards}/>
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
     
     </div>
     </div>
  )
}

export default RestaurantCategory


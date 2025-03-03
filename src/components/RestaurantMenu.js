import { useEffect, useState } from "react";


const RestaurantMenu=()=>{

  const [resMenu,setResMenu]=useState(null);
  const fetcher=async()=>{
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER   ");
    const data =await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=104174&catalog_qa=undefined&submitAction=ENTER")
    const json=await data.json();
    setResMenu(json?.data);
    console.log(json)
  }
  useEffect(()=>{
    fetcher();
  },[])
    const {name} = resMenu?.cards[2]?.card?.card?.info || {};  
   return(
    <div>
    <h1> {name}</h1>  
    </div>
  )
}

export default RestaurantMenu;




// import React, { useState } from 'react'
// import { useState,useEffect } from 'react'
// import Shimmer from './Shimmer';
// import { useParams } from 'react-router-dom';
// import { RES_URL } from '../../utils/constant';
// import useResMenu from '../../utils/useResMenu';
// import RestaurantCategory from './RestaurantCategory';
// const  ResMenu=()=> {

// const {resId}=useParams();
// const resMenuInfo=useResMenu(resId);
// const [showIndex,setShowIndex]=useState();
// if(resMenuInfo===null)
//     return <Shimmer/>
// const {name,cuisines,avgRating,costForTwoMessage}=resMenuInfo?.cards[2]?.card?.card?.info;
// const {itemCards}=resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log("itemCards",itemCards);
// console.log("resMenuInfo",resMenuInfo);
// const categories=resMenuInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>(
//         c.card?.["card"]?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
// )
// console.log("categories",categories);
//   return (
//     <>
//     <div className='flex justify-center items-center flex-col'>
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <h3 className='mx-2'>{avgRating} rating</h3>
//       <p className="font-bold text-sm my-2">
//         {cuisines.join(",")}-{costForTwoMessage}
//       </p>
//       </div>
//       {/* categories accordians*/}
//       {categories.map((category,index)=>(
//           <RestaurantCategory data={category?.card?.card} 
//           key={category?.card?.card?.categoryId} 
//           showItems={index===showIndex?true:false}
//           onShow={()=>setShowIndex(index)}/>
//         ))}      
    
//     </>
//   )
// }

// export default ResMenu;
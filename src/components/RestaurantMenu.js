import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

  const {resId}=useParams();
  const resMenu = useRestaurantMenu(resId);
  if( resMenu===null){
  return <Shimmer/>
  }
    const {name , cuisines,costForTwoMessage} = resMenu?.cards?.[2]?.card?.card?.info || {};  
    const categories= resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(value => value?.card?.["card"]?.["@type"]===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    return(
      
    <div className=" text-center border border-black w-3/4 ml-48 h-full mt-4">
    {console.log(categories)}
    <h1 className="font-extrabold text-3xl"> {name}</h1>  
    <h3 className=" font-black text-xl">{cuisines.join(", ")}  {costForTwoMessage}</h3>
    {
      categories.map((value)=>{
        return(
          <RestaurantCategory/>
        )
      })
    }




    </div>
  )
}

export default RestaurantMenu;


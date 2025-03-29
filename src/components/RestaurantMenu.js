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
    const categories= resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(value => value?.card?.card?.["@type"]===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    return(
      
    <div className=" ">
    {console.log(categories)}
    <h1 className="font-extrabold text-3xl  mx-80 mt-10"> {name}</h1>  
    <h3 className=" font-black text-xl   mx-80  my-2">{cuisines.join(", ")}  {costForTwoMessage}</h3>
    {
      categories.map((category)=>{
        return(
          <RestaurantCategory data={category.card.card} />
        )
      })
    }




    </div>
  )
}

export default RestaurantMenu;


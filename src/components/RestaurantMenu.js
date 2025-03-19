import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../../utils/contants";
import useRestaurantMenu from "../../utils/useRestaurantMenu";


const RestaurantMenu=()=>{

  const {resId}=useParams();
  const resMenu = useRestaurantMenu(resId);
  if( resMenu===null){
  return <Shimmer/>
  }
    const {name , cuisines,costForTwoMessage} = resMenu?.cards?.[2]?.card?.card?.info || {};  
    const {itemCards}= resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ||{};
   return(
    <div>
    <h1> {name}</h1>  
    <h3>{cuisines.join(", ")}  {costForTwoMessage}</h3>
    <h2>Menu</h2>
    <ul>
    {
      
   itemCards.map((item)=>(
      <li key={item?.card?.info?.id}>
      {item?.card?.info?.name}--
      {item?.card?.info?.price/100 ||item?.card?.info?.defaultPrice/100}  
      </li>
        ) 
      ) 
    }
    </ul>
    </div>
  )
}

export default RestaurantMenu;


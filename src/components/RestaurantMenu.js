import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
  const [showIndex,SetShowIndex]=useState(null);
  const {resId}=useParams();
  const resMenu = useRestaurantMenu(resId);
  if( resMenu===null){
  return <Shimmer/>
  }
    const {name , cuisines,costForTwoMessage} = resMenu?.cards?.[2]?.card?.card?.info || {};  
    const categories= resMenu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(value => value?.card?.card?.["@type"]===
       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
)||[];
    return(
      
    <div className=" bg-red-50  w-full">
      <div className="  w-full flex flex-col items-center mt-8 ">    
      <h1 className="font-extrabold text-3xl border bg-gradient-to-br from-yellow-100 to-orange-800  bg-clip-text text-transparent "> {name}</h1>  
    <h3 className=" font-black text-xl bg-gradient-to-br from-green-700 to-green-300  bg-clip-text text-transparent  border">{cuisines.join(", ")}  {costForTwoMessage}</h3>
    </div>

    {
      categories.map((category,index)=>{
        return(
          <RestaurantCategory key={category.card.title}
          data={category?.card?.card}
          SetShowIndex ={()=>SetShowIndex(index===showIndex?null:index)}          
          showIndex = {
          index===showIndex}
          // showItems={index === showIndex?true:false} // yha se ham true ya false send krenge showItem k andr as a props to => restaurantCategory, 
          // // showIndex jo andr wala hai uske and hai value index ki jo setIndex se mili

          // SetShowItem={()=>SetShowIndex(index)}  // bahr wala setShowItem  function hold krta h . and andr funcition isliye bnaya kuki click hone pe func ivoke ho
          // // and wo funciton setShowIndex(index) se ShowIndex ki value mein index ko dal de 

           />
        ) 
      })
    }




    </div>
  )
}

export default RestaurantMenu;


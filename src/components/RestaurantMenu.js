import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{
<<<<<<< HEAD
  const [showIndex,SetShowIndex]=useState(null);
=======

>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
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
      
<<<<<<< HEAD
    <div className=" bg-red-50">
    <h1 className="font-extrabold text-3xl  mx-80 mt-10"> {name}</h1>  
    <h3 className=" font-black text-xl   mx-80  my-2">{cuisines.join(", ")}  {costForTwoMessage}</h3>
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
=======
    <div className=" ">
    <h1 className="font-extrabold text-3xl  mx-80 mt-10"> {name}</h1>  
    <h3 className=" font-black text-xl   mx-80  my-2">{cuisines.join(", ")}  {costForTwoMessage}</h3>
    {
      categories.map((category)=>{
        return(
          <RestaurantCategory data={category.card.card} />
        )
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
      })
    }




    </div>
  )
}

export default RestaurantMenu;


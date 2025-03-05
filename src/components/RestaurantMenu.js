import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

  const [resMenu,setResMenu]=useState(null);
  const fetcher=async()=>{
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER   ");
    const data =await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.87960&lng=78.07620&restaurantId=101574&catalog_qa=undefined&submitAction=ENTER")
    const json=await data.json();
    setResMenu(json?.data);
    console.log(json)
  }
  useEffect(()=>{
    fetcher();
  },[])
  if( resMenu===null){
  return <Shimmer/>
  }
    const {name , cuisines,costForTwoMessage} = resMenu?.cards[2]?.card?.card?.info || {};  
    const {itemCards}= resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ||{};
   return(
    <div>
    <h1> {name}</h1>  
    <h3>  {costForTwoMessage}</h3>
    <h2>Menu</h2>
    <ul>
    {
    itemCards.map((item)=>(
      <li>
      {item?.card?.info?.name}--
      {item?.card?.info?.price/100}
      </li>

        )
    )
    }
    </ul>
    </div>
  )
}

export default RestaurantMenu;


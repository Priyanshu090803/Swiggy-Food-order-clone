import { useEffect, useState } from "react";

const RestaurantMenu =()=>{
    const [resMenu,setResMenu]= useState(null);
    useEffect(()=>{
      fetchMenu();
    },[])
    let fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json();
        // console.log(json)
    console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
        setResMenu(json.data);
        // setResMenu(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // const {name,avgStarRating}=resMenu?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info;
    const { name = "No name available", avgStarRating = "No rating available" } =
  resMenu?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info || {};


    return(
        <div>
                <h1> {name}</h1>
                <h4>{avgStarRating}</h4>

        </div>
    )
}
export default RestaurantMenu; 
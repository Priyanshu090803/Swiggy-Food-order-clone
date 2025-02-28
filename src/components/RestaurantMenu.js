import { useEffect, useState } from "react";

const RestaurantMenu =()=>{
    const [resMenu,setResMenu]= useState();
    useEffect(()=>{
      fetchMenu();
    },[])
    let fetchMenu = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json();
        console.log(json)
        setResMenu(json.data);
    }


    return(
        <div>
            <h1>{}</h1>
        </div>
    )
}
export default RestaurantMenu; 
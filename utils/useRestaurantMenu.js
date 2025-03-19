import { useEffect, useState } from "react";
import { MENU_URL } from "./contants";

const useRestaurantMenu =(resId)=>{
    const [resMenu,setResMenu]=useState(null);

    useEffect(()=>{
        fetcher()
    },[])
    const fetcher = async function(){
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResMenu(json?.data)
    }

    return resMenu;
}
export default useRestaurantMenu;
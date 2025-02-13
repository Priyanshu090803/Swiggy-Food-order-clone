//Navbar
//-Logo
//-Nav Items
// Body
// -Search
// -Restorant container
//   -Restorant card
// Footer
// -copyright
// - links
// -adress
// -contact


import RestaurantCard from "./RestaurantCard";
import ResList from "../../utils/mockDtata";
import { useEffect, useState } from "react";
const Body = () => {
    const [listOfRes,setListOfRes]=useState([]); 
  
   useEffect(()=>{
    fetchData();
   },[])
   const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.272351552696676&lng=78.00481863319874&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // setListOfRes(json?.info?.cards[2]?.data?.data?.cards)
    console.log(json)
    setListOfRes()
   }
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
           let valueOfList=listOfRes.filter(
              (i)=>i.data.avgRating>4.2,
              console.log(listOfRes)
            )
            setListOfRes(valueOfList)

            
                    }}

          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="res-container">
        
        
          listOfRes?.map((value) => (
              <RestaurantCard key={value.data.id} ResData={value} />    // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }
        </div>
      </div>
    );
  };
export default Body;
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRes,setListOfRes]=useState([]);        // IMP NOTE: USE listOfRes(usestate variable) at the mapping also . Ab har jagah is component k andr Reslist ke jagah listOfRes  likh sakte hai 
  
   
    const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
   
   useEffect(()=>{
    fetchData()
   },[])
    return listOfRes.length===0 ? ( <Shimmer/>): (                                       //just a ternary operator is used here for the conditinal rendering
      <div className="body">

        <div className="filter">


          <button className="filter-btn" onClick={()=>{

             let valueOfList=listOfRes.filter(
              (i)=>i.info.avgRating>4.2,
              console.log(listOfRes)
              )
            setListOfRes(valueOfList)}}>
            Top Rated Restaurants
          </button>

        </div>
        <div className="res-container">
        

          { 
          listOfRes?.map((value) => (
              <RestaurantCard key={value.id} ResData={value} />    // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }

        </div>
      </div>
    );
  };
export default Body;
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRes,setListOfRes]=useState([]);        // IMP NOTE: USE listOfRes(usestate variable) at the mapping also . Ab har jagah is component k andr Reslist ke jagah listOfRes  likh sakte hai 
    const [searchText,setSearchText]=useState("");
    const [filteredRes,setFilteredRes]=useState([]);

    const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

   }
   
   useEffect(()=>{
    fetchData()
   },[])
    return listOfRes.length===0 ? ( <Shimmer/>): (                                       //just a ternary operator is used here for the conditinal rendering
      <div className="body">
      <div className="upper">

      <div className="search">
      <input type="text" placeholder="Search....." className="search-box"
      value={searchText} onChange={(e)=>setSearchText(e.target.value)}
      ></input>

      <button className="search-button"

      onClick={()=>{
        console.log(searchText);
        const filteredRestaurant= listOfRes.filter((res)=>res?.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRes(filteredRestaurant);
      }}
      
      >Search</button>
      </div>

        <div className="filter">


          <button className="filter-btn" onClick={()=>{

             let valueOfList=filteredRes.filter(
              (i)=>i.info.avgRating>4.2,
              console.log(listOfRes)
              )
              setFilteredRes(valueOfList)}}>
            Top Rated Restaurants
          </button>
</div>
        </div>
        <div className="res-container">
        

          { 
            filteredRes?.map((value) => (
             <Link key={value.info.id} to={"restaurants/"+value.info.id}><RestaurantCard  ResData={value} /></Link>     // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }

        </div>
      </div>
    );
  };
export default Body;
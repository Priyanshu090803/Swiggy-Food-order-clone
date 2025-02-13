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



body code : this is the earlier code written for just for me to understand what was the journey of my code from being basic to dynamic


import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRes,setListOfRes]=useState([]); // IMP NOTE: USE listOfRes(usestate variable) at the mapping also . Ab har jagah is component k andr Reslist ke jagah listOfRes  likh sakte hai 
  
   
    const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.272351552696676&lng=78.00481863319874&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
   
   useEffect(()=>{
    fetchData()
   },[])
  //  if(listOfRes.length===0){
  //   return <Shimmer/>
  //  }
    return listOfRes.length===0 ?( <Shimmer/>): (                                       //just a ternary operator is used here
      <div className="body">
        <div className="filter">




          <button className="filter-btn" onClick={()=>{
           let valueOfList=listOfRes.filter(
              (i)=>i.info.avgRating>4.2,
              console.log(listOfRes)
            )
            setListOfRes(valueOfList)

            
                    }}

          >
            Top Rated Restaurants
          </button>
        </div>
        <div>




         [ =>    
        
          {/* 1st time commented *//* <RestaurantCard resName="Meghna" cuisine="Biryani, North Indian, Asian "
              stars="4.4 star"
              time="30 minutes"    
              /> *//* <RestaurantCard resName="MacD"
                  cuisine="Burger ,Pizza ,Coffee"
                  stars="4.2 star"
                  time="24 minutes"
              /> */
  
          /* 2nd time commented */
          /* <RestaurantCard ResData={ResList[1]}/>
          <RestaurantCard ResData={ResList[2]}/>
          <RestaurantCard ResData={ResList[3]}/>
          <RestaurantCard ResData={ResList[4]}/>
          <RestaurantCard ResData={ResList[5]}/> */
  
          /* Now we will use map function for passing dynamically data */
          
            /* ResList.map((ResList) => (
              <RestaurantCard key={ResList.info.id} ResData={ResList} />
            )) // config driver ui was created by map function */
  
          // OR
          // UPR PE HAMNE BRACKETS K ANDR ResList ko dala hua tha or key or ResData k and bhi dala hua the pr ham wha pe kisi bhi nam ki value dal skte hai ,AS WE DO IN ARRAY MAP FUNCITON; 
            

         ]






            
          listOfRes?.map((value) => (
              <RestaurantCard key={value.id} ResData={value} />    // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }
        </div>
      </div>
    );
  };
export default Body;















import { CDN_URL } from "../../utils/contants";
const RestaurantCard = (props) => {
    const { ResData } = props;
    const {
      // cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = ResData?.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        {/* <h3>{ResData.info.name}</h3>
              <h4>{ResData.info.cuisines.join(", ")}</h4>
              <h4>{ResData.info.avgRating}</h4>
              <h4>{ResData.info.costForTwo}</h4>
              <h4>{ResData.info.deliveryTime}</h4> */}
        <img
          className="res-logo"
          src={
            CDN_URL +
            ResData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    );
  };
export default RestaurantCard;
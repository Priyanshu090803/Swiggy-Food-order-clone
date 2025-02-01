import RestaurantCard from "./RestaurantCard";
import ResList from "../../utils/mockDtata";
import { useState } from "react";
const Body = () => {
    const [listOfRes,setListOfRes]=useState(ResList); // IMP NOTE: USE listOfRes(usestate variable) at the mapping also . Ab har jagah is component k andr Reslist ke jagah listOfRes  likh sakte hai 
    return (
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
        <div className="res-container">
        
          {/* 1st time commented */}
          {/* <RestaurantCard resName="Meghna" cuisine="Biryani, North Indian, Asian "
              stars="4.4 star"
              time="30 minutes"    
              /> */}
          {/* <RestaurantCard resName="MacD"
                  cuisine="Burger ,Pizza ,Coffee"
                  stars="4.2 star"
                  time="24 minutes"
              /> */}
  
          {/* 2nd time commented */}
          {/* <RestaurantCard ResData={ResList[1]}/>
          <RestaurantCard ResData={ResList[2]}/>
          <RestaurantCard ResData={ResList[3]}/>
          <RestaurantCard ResData={ResList[4]}/>
          <RestaurantCard ResData={ResList[5]}/> */}
  
          {/* Now we will use map function for passing dynamically data */}
          {
            /* ResList.map((ResList) => (
              <RestaurantCard key={ResList.info.id} ResData={ResList} />
            )) // config driver ui was created by map function */
  
          // OR
          // UPR PE HAMNE BRACKETS K ANDR ResList ko dala hua tha or key or ResData k and bhi dala hua the pr ham wha pe kisi bhi nam ki value dal skte hai ,AS WE DO IN ARRAY MAP FUNCITON; 
            
          listOfRes.map((value) => (
              <RestaurantCard key={value.info.id} ResData={value} />    // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }
        </div>
      </div>
    );
  };
export default Body;
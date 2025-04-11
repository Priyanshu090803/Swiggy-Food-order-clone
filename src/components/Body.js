import RestaurantCard ,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

const Body = () => {
    const [listOfRes,setListOfRes]=useState([]);        // IMP NOTE: USE listOfRes(usestate variable) at the mapping also . Ab har jagah is component k andr Reslist ke jagah listOfRes  likh sakte hai 
    const [searchText,setSearchText]=useState("");
    const [filteredRes,setFilteredRes]=useState([]);
    const RestaurantCardPromoted= withPromotedLabel(RestaurantCard)

    const fetchData= async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json)
    setListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

   }
   
   useEffect(()=>{
    fetchData()
   },[])
   
   const checkStatus= useOnlineStatus() ;
   if(checkStatus===false){
    return(
      <h1>You are offline</h1>
    )
   }
  
   const {setUsername,loggedInUser}=useContext(UserContext)


    return listOfRes.length===0 ? ( <Shimmer/>): (                                       //just a ternary operator is used here for the conditinal rendering
      <div className="  rounded-2xl bg-gray-100 mt-4 ">
      <div className="  flex justify-between rounded-2xl h-12  mt-6">

      <div className="  rounded-2xl w-1/3 flex justify-between items-center ml-12">
      <input type="text" placeholder="Search....." className="search-box h-5/6 w-4/5 pl-4 border rounded-lg bg-blue-50 focus:border-gray-100 focus:border-l-gray-50 "
      value={searchText} onChange={(e)=>setSearchText(e.target.value)}
      ></input>

      <button className="search-button  w-1/7 h-5/6 rounded-lg bg-gray-300"

      onClick={()=>{
        console.log(searchText);      
        const filteredRestaurant= listOfRes.filter((res)=>res?.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRes(filteredRestaurant);
      }}
      
      >Search</button>
      </div>

      <div className=" cursor-pointer">
      <label className=" ">UserName:
      <input className=" ml-1 border rounded-xl mt-3 p-2 outline-pink-200 bg-white" 
      value={loggedInUser}    // loggedInUser default value wala hoga Yha pe hamne app.js mai priyanshu dala h
      onChange={(e)=>setUsername(e.target.value)} // ye input ki value change hone mai SetUserName wala UseEffect to trigger krega and Username ko change krega jo header mai Dala hua hai 
      />
      </label>
      </div>

        <div className="filter rounded-lg flex justify-between items-center mr-8 w-28 text-sm bg-gray-300 font-medium">

          <button className=" h-full w-full" onClick={()=>{

             let valueOfList=filteredRes.filter(
              (i)=>i.info.avgRating>4.2,
              console.log(listOfRes)
              )
              setFilteredRes(valueOfList)}}>
            Top Restaurants
          </button>
</div>
        </div>

        <div className="res-container mt-10 flex flex-wrap gap-10 px-8">
        
          {  
            filteredRes?.map((value) => (
             <Link key={value.info.id} to={"restaurants/"+value.info.id}>
             
             {
              value.info.veg?(
                <RestaurantCardPromoted ResData={value}/>
              ):
              (<RestaurantCard  ResData={value} />
              )
             }
             </Link>     // YHA PE (VALUE) RESLIST K ANDR K ELEMENTS KO TARGET KREGA ::
            )) 
          }

        </div>
      </div>
    );
  };
export default Body;
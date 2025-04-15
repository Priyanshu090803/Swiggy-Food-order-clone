import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import {useSelector} from 'react-redux'

export const Header = () => {
  const cartItems= useSelector((store)=>store.cart.items);
  const [btnName,SetbtnName] = useState("login");
  let checkStatus= useOnlineStatus()
  // useEffect(()=>{
  //   console.log('body rendered')
  // },[btnName]);

  const {loggedInUser}=useContext(UserContext)

  return (
      <div className=" bg-rose-50 shadow-lg rounded-2xl h-16 flex justify-between  align-middle ">
        <div className=" size-14 ml-2">
          <img
            className=""
            src={LOGO_URL}
          ></img>
        </div>

        <div className="  flex items-center w-4/6 h-full">
          <ul className=" flex gap-10 justify-evenly  text-xl  w-full ">
           <li className="">Online status:{checkStatus?"🟢":"🔴"}</li>
            <li className=" hover:text-red-400"><Link to={'/'}>Home</Link></li>
            <li className=" hover:text-red-400"><Link to={'/about'}>About Us</Link></li>
            <li className=" hover:text-red-400"><Link to={'/contact'}>Contact Us</Link></li>
            <li className=" hover:text-red-400"><Link to={'/grocery'}>Groceries</Link></li>
            <li className=" hover:text-red-400 font-semibold text-xl"><Link to={'/cart'}>Cart-(items {cartItems.length})</Link></li>
            
            <button className="login bg-gray-300 hover:bg-gray-400 hover:text-amber-50 h-10 w-16 rounded-lg" onClick={()=>{
              btnName==="login"? SetbtnName("logOut") : SetbtnName("login");
            }}>{btnName}</button>

          </ul>
          <h3>{loggedInUser}</h3>
        </div>

      </div>
    );
  };
export default Header;
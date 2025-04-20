// import { useContext, useEffect, useState } from "react";
// import { LOGO_URL } from "../../utils/contants";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
// import UserContext from "../../utils/UserContext";
// import {useSelector} from 'react-redux'

// export const Header = () => {
//   const cartItems= useSelector((store)=>store.cart.items);
//   const [btnName,SetbtnName] = useState("login");
//   let checkStatus= useOnlineStatus()
//   // useEffect(()=>{
//   //   console.log('body rendered')
//   // },[btnName]);

//   const {loggedInUser}=useContext(UserContext)

//   return (
//       <div className=" bg-rose-50 shadow-lg px-2 rounded-2xl h-16 flex justify-between items-center ">
//         <div className=" size-10 md:size-14 ml-2">
//           <img
//             className=""
//             src={LOGO_URL}
//           ></img>
//         </div>

//         <div className="  flex item-center border  w-4/6 h-full">
//           <ul className=" hidden md:flex gap-10 justify-evenly items-center font-medium  w-full ">
//            <li className=" text-sm "> Online status:{checkStatus?"🟢":"🔴"}</li>
//             <li className=" hover:text-red-400 "><Link to={'/'}>Home</Link></li>
//             <li className=" hover:text-red-400"><Link to={'/about'}>About Us</Link></li>
//             <li className=" hover:text-red-400"><Link to={'/contact'}>Contact Us</Link></li>
//             <li className=" hover:text-red-400 hidden"><Link to={'/grocery'}>Groceries</Link></li>
//             <li className=" hover:text-red-400 font-semibold text-xl"><Link to={'/cart'}>Cart-(items {cartItems.length})</Link></li>
            
//             <button className="login bg-gray-300 hover:bg-gray-400 hover:text-amber-50 h-10 w-16 rounded-lg" onClick={()=>{
//               btnName==="login"? SetbtnName("logOut") : SetbtnName("login");
//             }}>{btnName}</button>

//           </ul>
//           {/* <h3>{loggedInUser}</h3> */}
//         </div>

//       </div>
//     );
//   };
// export default Header;

import { useContext, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import { Menu, X } from 'lucide-react';  // <-- use lucide icons for clean look

export const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnName, setBtnName] = useState("login");
  const checkStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-rose-50 shadow-lg px-4 rounded-2xl h-16 flex justify-between items-center relative">

      <div className="size-10 md:size-14 ml-2">
        <img className="h-full w-auto" src={LOGO_URL} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 justify-evenly items-center font-medium w-4/6">
        <li className="text-sm list-none">Online status: {checkStatus ? "🟢" : "🔴"}</li>
        <li className="hover:text-red-400 list-none"><Link to="/">Home</Link></li>
        <li className="hover:text-red-400 list-none"><Link to="/about">About Us</Link></li>
        <li className="hover:text-red-400 list-none"><Link to="/contact">Contact Us</Link></li>
        <li className="hover:text-red-400 hidden list-none"><Link to="/grocery">Groceries</Link></li>
        <li className="hover:text-red-400 font-semibold text-xl list-none">
          <Link to="/cart">Cart - ({cartItems.length})</Link>
        </li>
        <button
          className="login bg-gray-300 hover:bg-gray-400 hover:text-amber-50 h-10 w-16 rounded-lg"
          onClick={() => setBtnName(btnName === "login" ? "logOut" : "login")}
        >
          {btnName}
        </button>
      </div>

      {/* Hamburger Icon - visible on mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-rose-100 shadow-lg rounded-b-2xl flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <li className="text-sm list-none">Online status: {checkStatus ? "🟢" : "🔴"}</li>
          <li className="hover:text-red-400 list-none"><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li className="hover:text-red-400 list-none"><Link to="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
          <li className="hover:text-red-400 list-none"><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
          <li className="hover:text-red-400 hidden list-none"><Link to="/grocery" onClick={() => setIsMenuOpen(false)}>Groceries</Link></li>
          <li className="hover:text-red-400 font-semibold text-xl list-none">
            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart - ({cartItems.length})</Link>
          </li>
          <button
            className="login bg-gray-300 hover:bg-gray-400 hover:text-amber-50 h-10 w-16 rounded-lg"
            onClick={() => setBtnName(btnName === "login" ? "logOut" : "login")}
          >
            {btnName}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

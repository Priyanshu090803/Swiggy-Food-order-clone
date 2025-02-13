import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
export const Header = () => {


  let [btnName,SetbtnName] = useState("login");
  let count;
  useEffect(() => {
    
  }, [btnName])
  
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>

        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
              SetbtnName("logOut"),console.log(btnName)
            }}>{btnName}</button>
          </ul>
        </div>

      </div>
    );
  };
export default Header;
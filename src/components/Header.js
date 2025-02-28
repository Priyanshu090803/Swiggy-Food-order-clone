import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";

export const Header = () => {


  let [btnName,SetbtnName] = useState("login");

  useEffect(()=>{
    console.log('body rendered')
  },[btnName]);

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
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/cart'}>Cart</Link></li>
            <button className="login" onClick={()=>{
              btnName==="login"? SetbtnName("logOut") : SetbtnName("login");
            }}>{btnName}</button>
          </ul>
        </div>

      </div>
    );
  };
export default Header;
import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () => {


  let [btnName,SetbtnName] = useState("login");
  let checkStatus= useOnlineStatus()
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
           <li>Online status:{checkStatus?"🟢":"🔴"}</li>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
            <li><Link to={'/grocery'}>Groceries</Link></li>
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
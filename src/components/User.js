import { useState } from "react";

const User=({name,location})=>{
    const [count , SetCount]=useState(0);
  
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={()=>{SetCount(count+1)}}>Increase</button>
            <h3>counter:{count}</h3>
            <h3>{location}</h3>
            <h4>Contat : 454235432</h4> 
        </div>
    )
}
export default User;
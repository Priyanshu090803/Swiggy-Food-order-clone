// import User from "./User";
// import UserClass from "./UserClass";

// const About=()=>{
//     return(
//         <div className="About">
            
//         <UserClass name={"priyanshu chandra tamta"} location={"Location: Pithoragarh"}/>
//         <User name={"priyanshu tamta"} location={"Location: Pithoragarh"}/>

        
//         </div>
//     )
// }

// export default About;

import React from "react"
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../../utils/UserContext";

class About extends React.Component{
    constructor(props){
        super(props);
    // console.log("parent constructor");
    
    }
    componentDidMount(){
        // console.log("parent mount");
        
    }
    render(){
        // console.log("child");
        
        return(
            <div className="About  h-screen bg-gradient-to-br flex flex-col items-center gap-5 from-orange-50 to-green-100">            
         <UserClass />  
         <h3 className=" font-bold text-2xl bg-gradient-to-tr from-gray-600  to-pink-400 bg-clip-text text-transparent ">Hiee I'm </h3>

         <UserContext.Consumer>                      
            
            {/* this is conmponent */}
            {(data)=>
            
            <h1 className=" font-extrabold text-3xl uppercase bg-gradient-to-tr from-gray-900 bg-clip-text text-transparent ">{data.loggedInUser}</h1>}
         </UserContext.Consumer>
         <h4 className=" text-red-700">I am the creator of Foodiee App!</h4>
         <User  name={"priyanshu tamta"} location={"Location: Pithoragarh"}/>
       </div>
        )
    
    }
}
export default About;
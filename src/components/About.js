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
<<<<<<< HEAD
import UserContext from "../../utils/UserContext";
=======
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc

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
            <div className="About">            
         <UserClass />
<<<<<<< HEAD

         <UserContext.Consumer>                      
            {/* this is conmponent */}
            {(data)=><h1 className=" font-extrabold">{data.loggedInUser}</h1>}
         </UserContext.Consumer>

         <User name={"priyanshu tamta"} location={"Location: Pithoragarh"}/>
=======
         {/* <User name={"priyanshu tamta"} location={"Location: Pithoragarh"}/> */}
>>>>>>> 0e7021bcfe31c221556aeade70d6e296a049c5cc
       </div>
        )
    
    }
}
export default About;
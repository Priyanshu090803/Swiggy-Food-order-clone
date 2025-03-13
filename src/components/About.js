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

class About extends React.Component{
    constructor(props){
        super(props);
    console.log("parent constructor");
    
    }
    componentDidMount(){
        console.log("parent mount");
        
    }
    render(){
        console.log("child");
        
        return(
            <div className="About">            
         <UserClass name={"priyanshu chandra tamta"} location={"Location: Pithoragarh"}/>
         <User name={"priyanshu tamta"} location={"Location: Pithoragarh"}/>
       </div>
        )
    }
}
export default About;
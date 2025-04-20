import React from "react";
import { Link } from "react-router-dom";


class UserClass extends React.Component{
    constructor(props){
        super(props)

    this.state={
        
        userInfo:{
            html_url:"dummy name",
            location:"dummy location",
            avatar_url:"dummy url"
        }
    } 
    // console.log("child constructor");
    
    }
    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/Priyanshu090803");
        const json= await data.json();
        console.log(json);
        
        this.setState({
            userInfo:json,
        })
        // console.log("mounted child");
        
    }
    render(){
        // console.log("child render");
        
        return(
        <div 
        
        className="  flex  flex-col items-center pt-8 gap-4">
            <h1 className=" text-3xl font-bold bg-gradient-to-tr from-blue-700 to-purple-400 bg-clip-text text-transparent transition-all hover:text-teal-600 ">About Me</h1>
        <img
        className=" w-60 rounded-xl hover:scale-105 transition-all shadow-xl shadow-orange-200 mb-6"
        src={this.state.userInfo.avatar_url}/>
        <a href={this.state.userInfo.html_url} target="_blank" rel="noopener noreferrer">
      <h1 className=" inline-block hover:text-blue-500">Github:➡️  {this.state.userInfo.html_url} </h1> 
</a>

            {/* <button onClick={()=>{
            this.setState({
               count:count+1
            })
        }}>Increase</button>
        <h1>count:{count}</h1>
        <h4>Contat : 454235432</h4>  */}
    </div>
        )
    }
}
export default UserClass;
import React from "react";


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
        <div >
        <h1>{this.state.userInfo.html_url}</h1>
        <img src={this.state.userInfo.avatar_url}/>
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
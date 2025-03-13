import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)

    this.state={
        count:0
    } 
    console.log("child constructor");
    
    }
    componentDidMount(){
        console.log("mounted child");
        
    }
    render(){
        console.log("child render");
        
        const {count}=this.state;
        return(
        <div >
        <h1>{this.props.name}</h1>
        <h3>{this.props.location}</h3>
        <button onClick={()=>{
            this.setState({
               count:count+1
            })
        }}>Increase</button>
        <h1>count:{count}</h1>
        <h4>Contat : 454235432</h4> 
    </div>
        )
    }
}
export default UserClass;
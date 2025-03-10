import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div >
        <h1>{this.props.name}</h1>
        <h3>{this.props.location}</h3>
        <h4>Contat : 454235432</h4> 
    </div>
        )
    }
}
export default UserClass;
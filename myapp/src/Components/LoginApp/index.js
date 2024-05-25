import {Component} from "react";
import "./index.css";
class LoginApp extends Component{
    state = {islogined:true};
    toggle = ()=>{
        this.setState(
            (previousState)=>{
                return (previousState.islogined?{islogined:false}:{islogined:true});
            }
        );
    }
    render(){
        const {islogined} = this.state;
        return(
        <div className="container">
            {islogined && <h1 className="heading">Welcome user</h1>}
            {!islogined && <h1 className="heading">Please login</h1>}
            {islogined && <button onClick={this.toggle}>Logout</button>}
            {!islogined && <button onClick={this.toggle}>Login</button>}
        </div>
        )
    }
}
export default LoginApp;
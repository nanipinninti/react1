import { Component } from "react";
import "./index.css";
class UserUI extends Component {
    mg = ()=>{
        const {user,deleteuser} = this.props;
        deleteuser(user.uniqueNo);
    }
    render(){
        const {user,deleteuser} = this.props;
        const {name,role,imgurl} = user;
        return (
            <li className="listitem">
                <img src={imgurl} className="profilepic"/>
                <div className="userdetails">
                    <h1 className="name">{name}</h1>
                    <p className="role">{role}</p>
                </div>
                <button type="button" className="delete-button" onClick={this.mg}>
                    <img src="https://assets.ccbp.in/frontend/react-js/cross-img.png" 
                        className="delete-icon"/>
                </button>
            </li>
        )
    }
};
export default UserUI;
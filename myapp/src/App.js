import { Component} from 'react';
import UserUI from './Components/UserUI/index.js';
import './App.css';
const initialuserdetails = [
  {
    uniqueNo : 1,
    name : 'Nani',
    role :'Software Developer',
    imgurl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png'
  },
  {
    uniqueNo : 2,
    name : 'Dileep',
    role :'Mech Developer',
    imgurl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png'
  },
  {
    uniqueNo : 3,
    name : 'Dillesh',
    role :'Executive manger',
    imgurl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png'
  },
  {
    uniqueNo : 4,
    name : 'Hari tarun',
    role :'CEO',
    imgurl : 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png'
  }
]
class App extends Component {
  state = {
    searchbox :"",
    userdetails : initialuserdetails
  }
  search = (event)=>{
    this.setState(
      {
        searchbox : event.target.value
      }
    )
  }
  deleting = (uniqueNo) => {
    const {userdetails} = this.state;
    const filtereduserlist = userdetails.filter((user)=>(
      user.uniqueNo!== uniqueNo
    ))
    this.setState(
      {
        userdetails : filtereduserlist
      }
    )
  }
  render() {
    const {searchbox,userdetails} = this.state;
    const filtereduserlist = userdetails.filter((user) => (
      user.name.includes(searchbox)
    ))
    return(
      <div className='container'>
        <h1 className='heading'>Users List</h1>
        <input type='search' onChange={this.search}/>
        <ul className='userlist'>
          {filtereduserlist.map(eachuser=>(
            <UserUI user = {eachuser} key = {eachuser.uniqueNo} deleteuser={this.deleting}/>
          ))}
        </ul>
      </div>
    )
  }
}
export default App;

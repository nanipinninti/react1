import {Component} from 'react';
import './index.css'
class ClickCounter extends Component {
    state = {count:0}
    increment = ()=>{
        this.setState(
            (previoustate)=>({count:previoustate.count+1})
        );
    }
    render(){
        const {count} = this.state;
        return(
            <div className='container'>
                <h1 className='heading'>The button has been clicked <span className='count'>{count}</span> times</h1>
                <p className='para'>Click the button to increase the count!</p>
                <button className="button" onClick={this.increment}>Click me</button>
            </div>
        );
    }
}
export default ClickCounter;
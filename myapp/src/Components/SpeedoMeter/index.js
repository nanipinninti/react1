import {Component} from 'react';
import './index.css';
class SpeedoMeter extends Component{
    state = {speed : 0};
    accelerate = ()=>{
        this.setState(
            (previoustae)=>{
                if (previoustae.speed === 200)
                return ({speed:200});
                else{
                    return ({speed:previoustae.speed+10})
                }
            }
        );
    };
    brake = ()=>{
        this.setState(
            (previoustate)=>{
                if (previoustate.speed==0){
                    return ({speed:0})
                }
                else{
                    return ({speed:previoustate.speed-10})
                }
            }
        );
    }
    render(){
        const {speed} = this.state;
        return (
            <div className='Container'>
                <h1>SPEEDOMETER</h1>
                <img src='https://assets.ccbp.in/frontend/react-js/speedometer-img.png' alt='speedometer'/>
                <h2>
                    Speed is <span>{speed}</span>mph
                </h2>
                <p>min limit is 0mph, Max limit is 200mph </p>
                <div className='buttons'>
                    <button className='accelration' onClick={this.accelerate}>Accelerate</button>
                    <button className='brake' onClick={this.brake}>Apply Brake</button>
                </div>
            </div>

        )
    }
}
export default SpeedoMeter;
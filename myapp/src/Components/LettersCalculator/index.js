import './index.css';
import { Component } from 'react';
class LettersCalculator extends Component {
    NoOfLetters = (e)=>{
        console.log(e.target.value)
        this.setState(
            {noOfletters:e.target.value.length}
        )
    };
    state = {noOfletters : 0};
    render(){
        const {noOfletters} = this.state;
        return(
            <div className='container'>
                <div className='content'>
                    <h1 className='heading'>
                     Calculate the Letters you enter
                    </h1>
                    <h3>
                        Enter the phrase
                    </h3>
                    <input type='text' placeholder='Enter the phrase' onChange={this.NoOfLetters}></input>
                    <button>No.of letters : {noOfletters}</button>
                </div>
                <div className='image'>
                    <img src = 'https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png'></img>
                </div>
            </div>  
        )
    }
}
export default LettersCalculator;
import {Component} from 'react';
import "./index.css";
class FeedBackApp extends Component{
    state = {isfeedbackgiven :false};
    emojiclicked = ()=>{
        this.setState(
            {isfeedbackgiven :true}
        )
    }
    render(){
        const {isfeedbackgiven} = this.state;
        return (
            <div>
                {
                    !isfeedbackgiven && 
                    <div>
                        <h2>How satisfied are you with our 
                            customer support and performence
                        </h2>
                        <div>
                            <div>
                               <img src='#' alt='Sad' onClick={this.emojiclicked}></img>
                               <h3>Sad</h3>
                            </div>
                            <div>
                                <img src='#' alt='Not sure' onClick={this.emojiclicked}></img>  
                                <h3>Not sure</h3>
                            </div>
                            <div>
                                <img src='#' alt='Happy' onClick={this.emojiclicked}></img>
                                <h3>Happy</h3>
                            </div>
                        </div>
                    </div>
                };
                {
                    isfeedbackgiven &&
                    <div>
                        <div>
                            <img src='#' alt='loveemoji'></img>
                            <h2>Thank you!</h2>
                        </div>
                        <h4>We will use your feed back to imporve our customer services and perforemce</h4>
                    </div>
                }
            </div>
        )
    }
}
export default FeedBackApp;
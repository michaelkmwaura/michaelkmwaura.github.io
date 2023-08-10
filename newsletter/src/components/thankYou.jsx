import "./thankYou.css"
import tick1 from "./images/icon-success.svg"

const ThankYou = ({email, setShowThankYou}) =>{
    return(
        <div id="mainDiv1">
            <img src={tick1} alt="ticklogo"/>
            <div id="mainText1">
                <h1>Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <strong>{email}</strong>. Please open it and click the button inside to confirm you subscription.</p>
                <button id="button" onClick={() => setShowThankYou(false)}>Dismiss message</button>
            </div>
        </div>
    )
}

export default ThankYou
import "./Newsletter-page.css"
import tick from "./images/icon-list.svg"
import mainimg from "./images/illustration-sign-up-desktop.svg"
import mobile from "./images/illustration-sign-up-mobile.svg"

const NewsletterPage = ({ setShowThankYou, email, setEmail }) =>{

    const handleSubmit = () =>{
        setShowThankYou(true);
    }

    const handleChange = (e) =>{
        setEmail(e.target.value)
    }

    return (
        <div id="mainDiv">
            <div id="mainText">
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers receiving monthly updates on:</p>
                <ul>
                <li><img src={tick} alt="tick"/>Product discovery and building what matters</li>
                <li><img src={tick} alt="tick"/>Measuring to ensure updates are a success</li>
                <li><img src={tick} alt="tick"/>And much more!</li>
                </ul>
                <div id="email">
                    <p>Email address</p>
                    <form type="submit" onSubmit={handleSubmit}>
                    <input id="emailAdress" placeholder="email@company.com" type="email" required onChange={handleChange}/>
                    <button id="submit" type="submit">Subscribe to monthly newsletter</button>
                    </form>
                </div>
            </div>
            <div id="image" >
                <img id="mobileimg" src={mobile}/>
                <img id="desktopimg" src={mainimg} alt="mainimage"/>
            </div>
        </div>
    )
}

export default NewsletterPage
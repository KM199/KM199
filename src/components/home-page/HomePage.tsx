import { Link } from "react-router-dom";
import glass from '../../styles/icons/glass.png'
import name from '../../styles/icons/name.svg'
import twitter from '../../styles/icons/twitter.png'
import '../../styles/styles.css'


const HomePage = () =>{
    return(
        <div className="home-page-container">
            <div id="mobile">
                <img id="mobile-logo" src={name}/>
                <h1 id="mobile-title">Your personal <br/> "<div className="effect">friend</div> that does crypto".</h1>
                <button id="action-button2" className="fifth glow">
                    <img id="twitter" src={twitter}/>
                        Connect on Twitter
                    </button>
                <p id="mobile-disclaimer">[View on Desktop for Best Experience]</p>
            </div>
            <div id="middle-content">
                
            </div>
        </div>
    )
}

export default HomePage;
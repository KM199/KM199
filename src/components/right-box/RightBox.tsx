import { Link } from "react-router-dom";
import '../../styles/styles.css'
import glass from '../../styles/icons/glass.png'

const RightBox = () => {
    return (
        <div className="right-box-container">
            <div id="aesthetic">
                    <div id="aesthetic-content">
                        <img id="glass" src={glass}/>
                        <br />
                        <div id="aesthetic-writing">
                            <h1 id="aesthetic-title">Get Free Crypto</h1>
                            <p id="aesthetic-paragraph"> Start learning about the Solana ecosystem with free crypto! Learn
                                with us and we'll cover your gas fees. Click below to get started.</p>
                        </div>
                        <button id="video-button" className="fifth">
                            Watch a Video
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default RightBox;
import { Link } from "react-router-dom";
import '../../styles/styles.css'

const ContactElement = () => {
    return (
        <div className = "contact-container">
            <div id = "writing">
                <h1 id = "contact-title">Let's Get Talking.</h1>
                <div id = "contact-paragraph">Being crypto enthusiasts at heart, we cherish the space, community, and constantly strive to help all aspects of it. Whether you’re looking to partner or just chat, we’d love to connect. Hope to hear from you soon!</div>
                <div className="infoButtons"><button id="action-button1" onClick = {() => window.open('mailto: team@hulio.app')}>Email</button> <button id="action-button2" onClick = {() => window.open('https://t.me/idealist')}>Text</button></div>
            </div>
        </div>
    )
}

export default ContactElement;
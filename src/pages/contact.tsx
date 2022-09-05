import Navbar from "../components/navbar/Navbar";
import ContactElement from "../components/contact/Contact";

const Contact = () =>{
    return (
        <div className="home-container">
                <Navbar />
            <div className="home-content-container">
                <ContactElement/>
            </div>
        </div>
    )
}

export default Contact;
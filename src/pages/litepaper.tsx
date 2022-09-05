import LitepaperElement from "../components/litepaper/Litepaper";
import MiddleContent from "../components/middle-content/MiddleContent";
import Navbar from "../components/navbar/Navbar";


const Litepaper = () =>{
    return (
        <div className="home-container">
            <Navbar />
            <div className="home-content-container">
                    <LitepaperElement/>
            </div>
        </div>
    )
}

export default Litepaper;